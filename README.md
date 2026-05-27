# 🌟 Sainath Reddy G — Personal Portfolio

Welcome to my personal portfolio website! This is a modern, high-performance, and visually stunning web application built from scratch to showcase my projects, journey, and technical skillset as an AI/ML Engineer and Developer.

🔗 **Live Portfolio**: [https://Sainath-777.github.io/My-Portfolio/](https://Sainath-777.github.io/My-Portfolio/)

---

## ✨ Features

- **💡 Seamless Dark / Light Mode**: A beautifully curated design system that shifts effortlessly between dark and light themes using CSS variables and Tailwind CSS.
- **🌌 3D Abstract Background**: An elegant, rotating particle sphere powered by `@react-three/fiber` and Three.js, adding depth without sacrificing page load performance.
- **✨ Custom Fine-Tuned Animations**:
  - **Splash Cursor**: A subtle, non-intrusive WebGL fluid cursor animation optimized to enhance user engagement.
  - **Ripple Click**: A gentle micro-animation click effect to provide satisfying interactive feedback.
- **📂 Dynamic Projects Portfolio**: A filtered showcase of projects (AI, ML, Web) with smooth layout animations using Framer Motion.
- **⏳ Professional Journey Timeline**: An interactive timeline detailing my experience, education, and open-source contributions (accompanied by a styled GitHub heatmap).
- **✉️ Clean Contact Routing**: A user-friendly Contact page featuring social linkages and a structured contact form, routing away from aggressive system `mailto:` actions.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 8 (extremely fast Hot Module Replacement)
- **Styling**: Tailwind CSS, PostCSS (configured with fluid gradients and custom transition curves)
- **3D & Animations**: Three.js, `@react-three/fiber`, `@react-three/drei`, Framer Motion
- **Icons**: Lucide React, React Icons

---

## 🚀 Getting Started Locally

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Sainath-777/My-Portfolio.git
cd My-Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the app!

### 5. Build for Production
To build the static assets for distribution:
```bash
npm run build
```

---

## 🌐 Deploying to GitHub Pages (Hosting Guide)

This repository is pre-configured for automated deployments to **GitHub Pages** using **GitHub Actions**.

### How it Works
We have created a deployment workflow under [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Whenever you push a commit to the `main` branch, GitHub Actions will:
1. Spin up an environment.
2. Install dependencies and run the production build (`npm run build`).
3. Upload the build output (`dist` directory).
4. Deploy it directly to your GitHub Pages site.

### One-Time Setup in GitHub Settings
To activate the deployment on your GitHub repository:
1. Go to your GitHub repository: **Sainath-777/My-Portfolio**.
2. Click on the ⚙️ **Settings** tab.
3. In the left sidebar, navigate to **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
5. Push your changes to `main`. GitHub will automatically trigger the workflow and publish your site!
6. Once deployed, your site will be live at `https://Sainath-777.github.io/My-Portfolio/`.

---

## 👨‍💻 Author

**Sainath Reddy G**
- **Email**: sainath2126@gmail.com
- **LinkedIn**: [Sainath Reddy G](https://www.linkedin.com/in/sainath-reddy-g-3263b324b/)
- **GitHub**: [@Sainath-777](https://github.com/Sainath-777)
