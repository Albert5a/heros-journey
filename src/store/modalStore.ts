import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: any) => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
}));
