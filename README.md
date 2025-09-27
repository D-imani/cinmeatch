🎬 Movie Recommendation App

A responsive and interactive movie recommendation web application built with Next.js 13 (App Router), TypeScript, and Styled Components.
The app fetches trending and recommended movies from The Movie Database (TMDB) API, supports dynamic routing for detailed movie pages, and allows users to save favorite movies locally.

🚀 Features

1. Dynamic Routing — Detailed movie pages using Next.js [id] routes.
2. User Personalization — Save favorite movies with Local Storage or API backend.
3. Interactive Dashboard — Browse trending and recommended movies with a responsive UI.
4. API Integration — Fetch movie data from TMDB API with error handling and loading states.
5. Responsive UI — Optimized for desktop and mobile, with hover effects and animations.


🛠️ Tech Stack

- Framework: Next.js 13 / React
- Language: TypeScript
- Styling: Styled Components
- Deployment: Netlify (recommended) or Vercel


⚙️ Setup Instructions

1. Clone the repository
   git clone https://github.com/D-imani/cinmeatch.git
   cd cinmeatch

2. Install dependencies
   npm install

# or

yarn install

3. Create environment variables
This project uses the TMDB API.
Create a .env.local file in the root of your project:

NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

🔑 You can get a free API key from TMDB
.

4. Run the project locally
   npm run dev

App runs at: http://localhost:3000

🌐 Deployment

- This project is configured for Netlify.
- Add environment variables in Netlify
- Go to your Netlify Dashboard → select your site.
- Navigate to Site Settings → Build & Deploy → Environment Variables.

Add:
+ Key: NEXT_PUBLIC_TMDB_API_KEY
+ Value: your TMDB key
- Save and redeploy your site.
- Redeploy

- From Deploys → click Trigger deploy → Clear cache and deploy site.
- Or push a commit to rebuild.

📝 Commit Workflow

This project follows Conventional Commits
:

feat: — New features
fix: — Bug fixes
style: — UI/Styling changes
docs: — Documentation updates
chore: — Build/tooling changes

Example:
feat: add dynamic routing for movie detail pages
docs: add API setup and usage instructions

✅ Evaluation Criteria
1. Functionality
- Fetches & displays trending/recommended movies
- Dynamic movie detail pages
- Save favorites locally
2. Code Quality
- TypeScript types (no any)
- Reusable components
- Clean structure
3. User Experience
- Responsive design
- Smooth navigation and animations
- Easy favorites management
4. Version Control
- Regular commits with descriptive messages
- Clean repo structure

📸 Screenshots
<img width="1859" height="849" alt="Screenshot 2025-09-28 003844" src="https://github.com/user-attachments/assets/0dc71c37-bbe6-4623-8ed3-90fb4e91eb51" />

🔮 Future Improvements
- User authentication (save favorites via backend API)
- Advanced recommendation engine
- Dark/Light mode toggle
