import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useGameStore } from '../store/gameStore';
import { allChapters } from '../data/chapters';
import { BookOpen, X, Play } from 'lucide-react';

const ChapterNotes = () => {
  const { currentChapterId, setView } = useGameStore();
  const chapter = allChapters.find(c => c.id === currentChapterId);

  if (!chapter) return null;

  return (
    <div className="overlay-container animate-fade-in">
      <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', height: '90vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '12px', borderRadius: '12px' }}>
              <BookOpen size={24} color="#818cf8" />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Study Material</p>
              <h2 style={{ fontSize: '1.5rem', color: 'white' }}>{chapter.title}</h2>
            </div>
          </div>
          <button 
            onClick={() => setView('3d')}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={28} />
          </button>
        </div>

        {/* Notes Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }} className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {chapter.content}
          </ReactMarkdown>
        </div>

        {/* Footer actions */}
        <div style={{ padding: '24px 32px', borderTop: '1px solid var(--panel-border)', textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={() => setView('quiz')} style={{ width: '100%', padding: '16px' }}>
            Take Quiz & Earn Coins <Play size={20} fill="currentColor" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChapterNotes;
