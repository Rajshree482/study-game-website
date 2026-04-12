import { create } from 'zustand';

export const useGameStore = create((set) => ({
  view: '3d', // '3d', 'notes', 'quiz', 'certificate'
  currentChapterId: 1,
  unlockedChapters: [1],
  coins: 0,

  setView: (view) => set({ view }),
  setCurrentChapterId: (id) => set({ currentChapterId: id }),
  unlockChapter: (id) => set((state) => {
    if (!state.unlockedChapters.includes(id)) {
      return { unlockedChapters: [...state.unlockedChapters, id] };
    }
    return state;
  }),
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
  resetGame: () => set({
    view: '3d',
    currentChapterId: 1,
    unlockedChapters: [1],
    coins: 0
  })
}));
