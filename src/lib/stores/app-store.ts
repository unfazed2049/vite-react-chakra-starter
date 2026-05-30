import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// ── App State Types ──────────────────────────────────────────

export interface AppState {
  /** Example counter for demonstrating Zustand state management */
  counter: number;
  /** Last visited page path */
  lastVisited: string;
}

export interface AppActions {
  decrement: () => void;
  increment: () => void;
  reset: () => void;
  setLastVisited: (path: string) => void;
}

export type AppStore = AppState & AppActions;

// ── Store with Persistence ───────────────────────────────────

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // Initial state
      counter: 0,
      lastVisited: '/',

      // Actions
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
      reset: () => set({ counter: 0 }),
      setLastVisited: (path) => set({ lastVisited: path }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist these fields (omit functions — they're reconstructed)
      partialize: (state) => ({
        counter: state.counter,
        lastVisited: state.lastVisited,
      }),
    }
  )
);
