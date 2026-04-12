import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Coins, Target } from 'lucide-react';
import { allChapters } from '../data/chapters';

const GameHUD = () => {
  const { coins, unlockedChapters } = useGameStore();
  const maxChapters = allChapters.length;
  // If chapter 13 is unlocked, it means 12 is finished, so max is 12
  const completed = Math.min(unlockedChapters.length - 1, maxChapters);

  return (
    <div className="hud-container animate-fade-in">
      <div className="hud-badge">
        <Target size={18} color="#ec4899" />
        <span>Progress: {completed} / {maxChapters}</span>
      </div>
      
      <div className="hud-badge coins">
        <Coins size={18} />
        <span>{coins}</span>
      </div>
    </div>
  );
};

export default GameHUD;
