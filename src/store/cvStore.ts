import { create } from "zustand";

interface CVData {
  name: string;
  email: string;
  phone: string;
}

interface CVStore {
  cvData: CVData;
  setCVData: (data: Partial<CVData>) => void;
}

export const useCVStore = create<CVStore>((set) => ({
  cvData: {
    name: "",
    email: "",
    phone: "",
  },
  setCVData: (data) =>
    set((state) => ({
      cvData: { ...state.cvData, ...data },
    })),
}));
