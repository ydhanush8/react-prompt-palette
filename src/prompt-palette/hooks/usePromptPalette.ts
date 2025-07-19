import { useContext } from "react";
import { PromptPaletteContext } from "../context/PromptPaletteProvider";

export const usePromptPalette = () => {
  const context = useContext(PromptPaletteContext);
  if (!context) {
    throw new Error("usePromptPalette must be used within a PromptPaletteProvider");
  }
  return context;
};
