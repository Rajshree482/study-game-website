import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, Download, RotateCcw } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

const Certificate = () => {
  const { resetGame } = useGameStore();

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366f1', '#ec4899', '#10b981', '#fbbf24']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366f1', '#ec4899', '#10b981', '#fbbf24']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="overlay-container animate-fade-in" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
      <div className="glass-panel" style={{ padding: '60px', width: '100%', maxWidth: '800px', textAlign: 'center', border: '2px solid rgba(251, 191, 36, 0.5)', background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <Award size={80} color="#fbbf24" style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))' }} />
        </div>

        <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Certificate of Completion
        </h3>

        <h1 style={{ fontSize: '3rem', fontFamily: 'Outfit, sans-serif', color: 'white', marginBottom: '20px' }}>
          Master of Disaster Management
        </h1>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          This certifies that you have successfully completed all modules of the Disaster Management study course and demonstrated exceptional knowledge in mitigating, preparing for, responding to, and recovering from catastrophic events.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Download size={20} /> Print Certificate
          </button>
          <button className="btn btn-secondary" onClick={resetGame}>
            <RotateCcw size={20} /> Restart Course
          </button>
        </div>

      </div>
    </div>
  );
};

export default Certificate;
