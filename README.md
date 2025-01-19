# PageYatra
PageYatra is a locally hosted, AI-powered web development environment that bridges the gap between creativity and code. With a simple prompt, generate fully functional React components, preview changes in real-time, and craft professional websites effortlessly. Designed for developers who want speed, simplicity, and control—all in one place.

Features:

- 🌟 Prompt-Driven Code Generation: Generate pages and components like home.tsx or Navbar.tsx instantly.
- 🔥 Live Preview: See real-time updates as you edit or generate code.
- 🛠️ Monaco Editor Integration: Enjoy a smooth coding experience with syntax highlighting and auto-completion.
- 🚀 One-Click Preview Refresh: No need for manual commands—refresh your live preview with a button.
- 💾 Local Development: Keep everything offline and secure, with files saved in a clean directory structure.



Todo:
-  ~code generation using llm~
- ~realtime preview of generated code~
- add multiple llms in current system
- Make UI better and GG 
- Your guys demands.

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/PageYatra.git
cd PageYatra

```

Install Dependencies

For Frontend:
```bash
cd PageYatra
npm install
```

For Backend:

```bash
cd backend
pip install -r requirements.txt
```

### Configuration
Frontend Configuration:

Ensure the frontend points to the backend API.
Update the vite.config.js file if necessary:
```bash
proxy: {
  '/api': {
    target: 'http://localhost:3001',
    changeOrigin: true,
    secure: false,
  },
}
```
Backend Configuration:

Replace the API_KEY placeholder in backend/app.py with your Gemini API key:
```bash
genai.configure(api_key='your-gemini-api-key')
```
### Running the Project

1. Start the Backend Server
```bash

cd backend
python app.py
```
The backend will be available at: http://localhost:3001.

2. Start the Frontend Development Server
```bash
cd PageYatra
npm run dev
```
The frontend will be available at: http://localhost:5173.

### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

Fork the repository.
1. Create a new branch: *git checkout -b feature-name.*
2. Commit your changes: *git commit -m 'Add feature'.*
3. Push to the branch: *git push origin feature-name.*
4. Open a pull request.

### Contact
For any questions or suggestions, feel free to reach out:

- Email: shubhambpn1234@gmail.com
- GitHub: shubham_th4kur
