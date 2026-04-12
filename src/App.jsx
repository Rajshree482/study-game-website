import React from 'react';
import ThreeDScene from './components/ThreeDScene';
import GameHUD from './components/GameHUD';
import ChapterNotes from './components/ChapterNotes';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import { useGameStore } from './store/gameStore';
import './index.css';

function App() {
  const { view } = useGameStore();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Scene runs in the background */}
      <ThreeDScene />

      {/* Main HUD overlays over 3D, always visible unless in Certificate view */}
      {view !== 'certificate' && <GameHUD />}

      {/* State-dependent views */}
      {view === 'notes' && <ChapterNotes />}
      {view === 'quiz' && <Quiz />}
      {view === 'certificate' && <Certificate />}
    </div>
  );
}

export default App;
