import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useGameStore } from '../store/gameStore';
import { allChapters } from '../data/chapters';
import { Award, ArrowRight, RefreshCw, X } from 'lucide-react';

const Quiz = () => {
  const { currentChapterId, setView, unlockChapter, addCoins } = useGameStore();
  const chapter = allChapters.find(c => c.id === currentChapterId);
  const questions = chapter?.quizzes || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shortAnswer, setShortAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!chapter) return null;

  const currentQ = questions[currentIndex];

  const handleMCQSelect = (option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQ.answer) {
      setScore(s => s + 1);
    }
  };

  const handleShortSubmit = (e) => {
    e.preventDefault();
    if (isAnswered || !shortAnswer.trim()) return;
    setIsAnswered(true);
    if (shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase()) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShortAnswer('');
      setIsAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    const passScore = questions.length * 0.6; // 60% passing
    // Wait for state to update
    setTimeout(() => {
      let currentScoreFinal = score;
      if (isAnswered) {
        if (selectedAnswer === currentQ.answer || shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase()) {
          currentScoreFinal += 1;
        }
      }
      if (currentScoreFinal >= passScore) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#ec4899', '#10b981', '#fbbf24']
        });
        addCoins(100);
        if (currentChapterId < 12) {
          unlockChapter(currentChapterId + 1);
        } else {
          unlockChapter(13); // Signal to show certificate
        }
      }
    }, 100);
  };

  let finalScoreCalc = score;
  if (isAnswered) {
    if (selectedAnswer === currentQ.answer || shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase()) {
      finalScoreCalc += 1;
    }
  }
  const passed = finalScoreCalc >= (questions.length * 0.6);

  if (quizFinished) {
    return (
      <div className="overlay-container animate-fade-in">
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
          {passed ? (
            <>
              <div style={{ background: 'rgba(16, 185, 129, 0.2)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Award size={40} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Congratulations!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>You successfully passed Chapter {chapter.id}!</p>
              <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '15px', borderRadius: '12px', color: '#fbbf24', fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
                Reward: +100 Coins
              </div>
              <button className="btn btn-primary" onClick={() => setView(currentChapterId === 12 ? 'certificate' : '3d')} style={{ width: '100%' }}>
                {currentChapterId === 12 ? 'Claim Certificate' : 'Continue to Next Chapter'} <ArrowRight size={20} />
              </button>
            </>
          ) : (
            <>
              <div style={{ background: 'rgba(239, 68, 68, 0.2)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <RefreshCw size={40} color="#ef4444" />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Keep Trying!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>You scored {finalScoreCalc}/{questions.length}. You need {Math.ceil(questions.length * 0.6)} to pass.</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button className="btn btn-secondary" onClick={() => setView('notes')} style={{ flex: 1 }}>
                  Review Notes
                </button>
                <button className="btn btn-primary" onClick={() => {
                  setCurrentIndex(0); setScore(0); setSelectedAnswer(null); setShortAnswer(''); setIsAnswered(false); setQuizFinished(false);
                }} style={{ flex: 1 }}>
                  Retry Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overlay-container animate-fade-in">
      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '32px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Question {currentIndex + 1} of {questions.length}</p>
            <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '8px' }}>
              <div style={{ height: '100%', width: `${((currentIndex + 1) / questions.length) * 100}%`, background: 'var(--primary-color)', borderRadius: '3px', transition: 'width 0.3s' }} />
            </div>
          </div>
          <button onClick={() => setView('3d')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', lineHeight: '1.5' }}>
          {currentQ.question}
        </h3>

        {currentQ.type === 'mcq' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentQ.options.map((opt, i) => {
              let className = 'quiz-option';
              if (isAnswered) {
                if (opt === currentQ.answer) className += ' correct';
                else if (opt === selectedAnswer) className += ' incorrect';
              } else if (opt === selectedAnswer) {
                className += ' selected';
              }

              return (
                <button 
                  key={i} 
                  className={className}
                  onClick={() => handleMCQSelect(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <form onSubmit={handleShortSubmit}>
            <input 
              type="text" 
              className="quiz-input"
              placeholder="Type your answer here..."
              value={shortAnswer}
              onChange={e => setShortAnswer(e.target.value)}
              disabled={isAnswered}
              autoFocus
            />
            {isAnswered && (
              <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase() ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', border: `1px solid ${shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase() ? 'var(--success)' : 'var(--error)'}` }}>
                <p style={{ fontWeight: 600 }}>{shortAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase() ? 'Correct!' : 'Incorrect'}</p>
                <p style={{ color: 'var(--text-muted)' }}>The correct answer is: <strong style={{ color: 'white' }}>{currentQ.answer}</strong></p>
              </div>
            )}
            {!isAnswered && (
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Submit Answer
              </button>
            )}
          </form>
        )}

        {isAnswered && (
          <button className="btn btn-primary animate-slide-up" onClick={handleNext} style={{ width: '100%', marginTop: '24px' }}>
            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
