from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import json
import subprocess
import re
import os
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))  # adjust based on your structure

# Configure the Gemini API
genai.configure(api_key='AIzaSyAPG9n_OVIypNFkASL7Yrby-GAK5QwX-ok')

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_missing_dependencies(code):
    """
    Parse the generated code for import statements and check for missing dependencies.
    """
    import_pattern = r'import\s+\{?.*?\}?\s+from\s+[\'"](.+?)[\'"];'
    dependencies = re.findall(import_pattern, code)
    missing_deps = []
    print(missing_deps)
    for dep in dependencies:
        node_modules_path = os.path.join(project_dir, 'node_modules', dep)
        # Check if dependency exists in node_modules or package.json
        if not os.path.exists(node_modules_path) and dep not in get_installed_dependencies():
            missing_deps.append(dep)

    return missing_deps


def get_installed_dependencies():
    """
    Get the list of installed dependencies from package.json.
    """
    try:
        with open('package.json', 'r') as f:
            package_json = json.load(f)
        return set(package_json.get('dependencies', {}).keys())
    except Exception:
        return set()

import shutil

def install_dependencies(dependencies):
    """
    Install missing dependencies using npm, cross-platform safe.
    """
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))  # adjust as needed

    npm_path = shutil.which("npm")
    if not npm_path:
        print("❌ npm not found in PATH. Make sure Node.js is installed.")
        return

    for dep in dependencies:
        try:
            print(f"📦 Installing dependency: {dep}")
            subprocess.run(
                [npm_path, "install", dep],
                check=True,
                cwd=project_dir
            )
        except subprocess.CalledProcessError as e:
            print(f"⚠️ Error installing {dep}: {e}")




# Component Library File
LIBRARY_FILE = 'component_library.json'

# Ensure the library file exists
if not os.path.exists(LIBRARY_FILE):
    with open(LIBRARY_FILE, 'w') as f:
        json.dump([], f)

### --- Component Generation Functionality ---
@app.route('/api/generateCode', methods=['POST'])
def generate_code():
    try:
        data = request.json
        user_input = data.get("prompt")
        filename = data.get("filename", "GeneratedComponent")

        # Step 1: Generate a detailed prompt
        model = genai.GenerativeModel("gemini-2.0-flash-exp")
        prompt_response = model.generate_content(
            f"""
            The user has provided the following input: {user_input}.
            Expand this into a short detailed prompt for generating a React component.
            Include details about:
            - Structure, layout, and visual design using Tailwind CSS.
            - Interactive and dynamic features if applicable.
            - Specific text or elements from the user input (e.g., titles, headings).
            """
        )

        if not prompt_response or not hasattr(prompt_response, "text"):
            return jsonify({"success": False, "error": "Failed to generate prompt."}), 500

        generated_prompt = prompt_response.text.strip()

        # Step 2: Generate the React component
        component_response = model.generate_content(
            f"""Use the information given in the {generated_prompt} and,
            generate a React functional component named '{filename}'.
            The component should:
            - Use Tailwind CSS for styling.
            - Ensure responsiveness and accessibility.
            - Include necessary features and components to match the expanded requirements.
            Only return the code (no extra text).
         """
        )

        if not component_response or not hasattr(component_response, "text"):
            return jsonify({"success": False, "error": "Failed to generate component."}), 500

        generated_code = component_response.text.replace("```", "").replace("jsx", "").strip()

                # Step 2: Check for missing dependencies
        missing_deps = get_missing_dependencies(generated_code)

        if missing_deps:
            install_dependencies(missing_deps)

        frontend_src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "src", "generated"))
        os.makedirs(frontend_src_dir, exist_ok=True)

        file_path = os.path.join(frontend_src_dir, f"{filename}.tsx")
        with open(file_path, "w") as file:
            file.write(generated_code)

        return jsonify({
            "success": True,
            "generatedPrompt": generated_prompt,
            "missingDependencies": missing_deps,
            "generatedCode": generated_code,
            "filePath": file_path
        })

    except Exception as e:
        print(f"Error: {e}") 
        return jsonify({"success": False, "error": str(e)}), 500


### --- Component Library Functionality ---
@app.route('/api/saveComponent', methods=['POST'])
def save_component():
    data = request.json
    name = data.get("name")
    description = data.get("description")
    code = data.get("code")

    if not all([name, description, code]):
        return jsonify({"success": False, "error": "Missing required fields."}), 400

    with open(LIBRARY_FILE, 'r+') as f:
        library = json.load(f)
        library.append({"name": name, "description": description, "code": code})
        f.seek(0)
        json.dump(library, f, indent=2)

    return jsonify({"success": True, "message": "Component saved successfully!"})


@app.route('/api/getComponents', methods=['GET'])
def get_components():
    with open(LIBRARY_FILE, 'r') as f:
        library = json.load(f)
    return jsonify({"success": True, "components": library})


@app.route('/api/deleteComponent', methods=['DELETE'])
def delete_component():
    data = request.json
    name = data.get("name")

    if not name:
        return jsonify({"success": False, "error": "Component name is required."}), 400

    with open(LIBRARY_FILE, 'r+') as f:
        library = json.load(f)
        updated_library = [comp for comp in library if comp['name'] != name]
        f.seek(0)
        f.truncate()
        json.dump(updated_library, f, indent=2)

    return jsonify({"success": True, "message": "Component deleted successfully!"})


### --- Run the Flask App ---
if __name__ == '__main__':
    app.run(port=3001, debug=True)
