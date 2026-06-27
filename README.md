```markdown
# 🌪️ Master of Disaster Management: 3D Study Game

An interactive, 3D web-based learning experience designed to teach students the fundamentals of Disaster Management. Navigate through a beautiful, space-themed 3D environment, unlock learning modules, read extensive notes, take interactive quizzes, and earn your certificate!

Live Demo: [https://rajshree482.github.io/study-game-website/](https://rajshree482.github.io/study-game-website/)

---

## ✨ Features

- **Interactive 3D Universe**: A dynamic space filled with floating crystal nodes built using `react-three-fiber`. Drag to rotate, zoom, and explore!
- **Premium Glassmorphic UI**: High-end styling featuring translucent panels, ambient glows, and smooth page transitions.
- **Progressive Learning System**: 12 categorized chapters based on an actual Disaster Management curriculum. Chapters must be unlocked sequentially by passing quizzes.
- **Dynamic Quizzes**: Each chapter features tailored quizzes (Multiple Choice & Short Answer). Score above 60% to trigger a confetti shower, earn coins, and unlock the next module!
- **Game HUD & State Persistence**: Tracks your coins and unlocked chapters globally using `zustand`.
- **Mastery Certificate**: Earn an elegant digital certificate upon completing all 12 chapters.

---

## 📚 Curriculum Covered

1. **Introduction to Disaster Management** (Definitions, The Disaster Equation, Types of Vulnerability & Capacity)
2. **Disaster Classification & Dimensions** (Natural vs. Man-made, CRED Criteria)
3. **Disaster Management & Planning** (SWOT Analysis, MBO, Crisis Phases)
4. **Disaster Preparedness** (Forecasting, Planning, Emotional Phases)
5. **Disaster Mitigation** (Structural vs. Non-structural, Seismic Zones)
6. **Disaster Response** (Triage systems, Modern vs Traditional methods)
7. **Disaster Recovery** (The 4 R's, Psychological Counseling)
8. **Contemporary Issues & Challenges** (NDMA, International Conventions)
9. **Cyclones** (Formation, Classification, Response guidelines)
10. **Earthquakes** (Faults, Seismic Waves, Richter Scale)
11. **Floods** (Flood-prone areas, Structural management)
12. **Droughts** (The 'Silent Disaster', Agricultural Adaptation)

---

## 🛠️ Technologies Used

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Markdown Parsing**: [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## 🚀 Setup & Installation

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone the repository** (or download the ZIP file):
   ```bash
   git clone https://github.com/rajshree482/study-game-website.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd "study game website"
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173` to play the game!

---

## 🌐 Deployment (GitHub Pages)

This project is configured to deploy directly to GitHub Pages.

To push a new update to the live website:
1. Make your changes and ensure they work locally.
2. Run the deploy command:
   ```bash
   npm run deploy
   ```
   *(This will automatically build the project and push the `dist` folder to the `gh-pages` branch).*
3. Ensure your GitHub Repository Settings > Pages > Source is set to deploy from the **`gh-pages`** branch.

---

## 📝 License

This project was created for educational purposes. Feel free to fork and modify it to build your own interactive study experiences!
```
