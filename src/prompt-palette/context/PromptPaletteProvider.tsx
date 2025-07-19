import React, { createContext, useState, useEffect } from "react";
import type { Prompt } from "../types/prompt";
import { loadPrompts, savePrompts } from "../utils/storage";

type PromptPaletteContextType = {
  prompts: Prompt[];
  getPrompt: (id: string) => Prompt | undefined;
  savePrompt: (prompt: Prompt) => void;
  updatePrompt: (id: string, newPrompt: Partial<Prompt>) => void;
};

export const PromptPaletteContext = createContext<PromptPaletteContextType | null>(null);

export const PromptPaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const data = loadPrompts();
    setPrompts(Object.values(data));
  }, []);

  const getPrompt = (id: string) => prompts.find((p) => p.id === id);

  const savePrompt = (prompt: Prompt) => {
    const updated = [...prompts.filter((p) => p.id !== prompt.id), prompt];
    setPrompts(updated);
    savePrompts(Object.fromEntries(updated.map((p) => [p.id, p])));
  };

  const updatePrompt = (id: string, newPrompt: Partial<Prompt>) => {
    const existing = prompts.find((p) => p.id === id);
    if (!existing) return;
    const updatedPrompt = { ...existing, ...newPrompt };
    savePrompt(updatedPrompt);
  };

  return (
    <PromptPaletteContext.Provider
      value={{ prompts, getPrompt, savePrompt, updatePrompt }}
    >
      {children}
    </PromptPaletteContext.Provider>
  );
};
