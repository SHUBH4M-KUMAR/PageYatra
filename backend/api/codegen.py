# File: app/routes.py
from flask import Blueprint, request, jsonify
import google.generativeai as genai
import os

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

api = Blueprint('api', __name__)

@api.route('/generateCode', methods=['POST'])
def generate_code():
    try:
        data = request.json
        user_input = data.get("prompt")
        filename = data.get("filename", "GeneratedComponent")
        model = genai.GenerativeModel("gemini-2.0-flash-exp")

        # Step 1: Generate a prompt dynamically
        prompt_response = model.generate_content(
            f"""
            The user has provided the following input: {user_input},
            Expand this into a short detailed prompt for generating a React component.
            Include details about:
            - Structure, layout, and visual design using Tailwind CSS.
            - Interactive and dynamic features if applicable.
            - do not give any code.
            - Specific text or elements from the user input (e.g., titles, headings).
            """
        )

        if not prompt_response or not hasattr(prompt_response, "text"):
            return jsonify({"success": False, "error": "Failed to generate prompt."}), 500

        generated_prompt = prompt_response.text.strip()
        print(generated_prompt)

        # Step 2: Generate the React component using the generated prompt
        component_response = model.generate_content(
            f"""use the information given in the {generated_prompt} and,
            generate a React functional component named '{filename}'.
            The component should Use Tailwind CSS for styling, ensuring responsiveness and accessibility and modern design.
            Include necessary features and components to match the expanded requirements.
            only give code and skip texts.
            """
        )

        if not component_response or not hasattr(component_response, "text"):
            return jsonify({"success": False, "error": "Failed to generate component."}), 500

        generated_code = component_response.text.replace("```", " ").replace("jsx", " ").strip()

        # Save the generated component to a file
        file_path = os.path.join(os.getenv('COMPONENT_PATH', './generated'), f"{filename}.tsx")
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w") as file:
            file.write(generated_code)

        return jsonify({
            "success": True,
            "generatedPrompt": generated_prompt,
            "generatedCode": generated_code,
            "filePath": file_path
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
