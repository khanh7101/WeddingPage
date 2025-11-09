import React, { createContext, useContext, useState, ReactNode } from "react";

type HeaderContextType = {
  hero: ReactNode | null;
  setHero: (node: ReactNode | null, heightPx?: string) => void;
  heroHeight: string;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [hero, setHeroNode] = useState<ReactNode | null>(null);
  const [heroHeight, setHeroHeight] = useState<string>("64px");

  function setHero(node: ReactNode | null, heightPx?: string) {
    setHeroNode(node);
    setHeroHeight(node ? heightPx ?? "620px" : "64px");
  }

  return (
    <HeaderContext.Provider value={{ hero, setHero, heroHeight }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error("useHeaderContext must be used within HeaderProvider");
  return ctx;
}