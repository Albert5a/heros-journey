import { create } from "zustand";

interface SearchState {
  searchHero: string | null;
  setSearchHero: (searchHero: string) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  searchHero: null,
  setSearchHero: (searchHero: string) => set({ searchHero }),
}));
