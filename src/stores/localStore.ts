import { create } from 'zustand';

type LocaleStore = {
  locale: 'en' | 'vi';
  setLocale: (locale: 'en' | 'vi') => void;
};

export const useLocaleStore = create<LocaleStore>(set => ({
  locale: 'en', // Default locale
  setLocale: locale => set({ locale }),
}));
