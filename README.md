🚀 AI Interview Assistant

An AI-powered web application that helps users prepare for interviews by generating technical & behavioral questions and identifying skill gaps based on their resume, job description, and self-description.

📌 Features
📄 Upload Resume (PDF)
📝 Input Job Description
👤 Add Self Description
🤖 Generate:
Technical Interview Questions
Behavioral Interview Questions
📊 Skill Gap Analysis (what you’re missing for the role)
🛠️ Tech Stack

Frontend:

React.js
Tailwind CSS (if used)

Backend:

Node.js
Express.js

Other Tools:

AI API (Gemini / OpenAI / etc.)
Multer (for file upload)
⚙️ How It Works
User uploads resume + enters job description & self-description
Backend processes the data
AI analyzes:
Required skills from job description
User’s current skills from resume
Generates:
Interview questions
Skill gap insights
📂 Project Structure
project-root/
│
├── frontend/
├── backend/
├── .env.example
├── README.md
🔑 Environment Variables

Create a .env file in the root and add:

PORT=5000
GEMINI_API_KEY=your_api_key_here
▶️ Run Locally
1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies

Frontend:

cd frontend
npm install
npm run dev

Backend:

cd backend
npm install
npm start
💡 Use Case
Students preparing for placements
Job seekers targeting specific roles
Anyone who wants personalized interview preparation
📈 Future Improvements
Add mock interview (voice/video)
Add scoring system
Improve skill gap visualization (charts)
Save user history/dashboard
🙌 Contributing

Feel free to fork this repo and improve it!

⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

👨‍💻 Author

Sanidhya jalwar
