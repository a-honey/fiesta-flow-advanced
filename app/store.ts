import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  id: string | null;
  profile: string | null;
  name: string | null;
  access_token: string | null;
  login: (
    id: string,
    profile: string | null,
    name: string,
    access_token: string
  ) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: (
    id: string,
    profile: string | null,
    name: string,
    access_token: string
  ) => set({ isLoggedIn: true, id, profile, name, access_token }),
  logout: () =>
    set({
      isLoggedIn: false,
      id: null,
      profile: null,
      name: null,
      access_token: null,
    }),
  id: null,
  profile: null,
  name: null,
  access_token: null,
}));

interface testResultState {
  haveTested: boolean;
  testResult: string | null;
  setResult: (result: string) => void;
}

export const useTestResultStore = create<testResultState>((set) => ({
  haveTested: false,
  testResult: null,
  setResult: (result: string) => set({ haveTested: true, testResult: result }),
}));

export default useAuthStore;
