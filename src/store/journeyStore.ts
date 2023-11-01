import { create } from "zustand";

interface JourneyState {
  herosJourney: any[];
  setHerosJourney: (herosJourney: any[]) => void;
}

export const useJourneyStore = create<JourneyState>()((set) => ({
  herosJourney: [],
  setHerosJourney: (herosJourney: any[]) => set({ herosJourney }),
}));
