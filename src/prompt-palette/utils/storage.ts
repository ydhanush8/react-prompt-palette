const STORAGE_KEY = "prompt-palette";

export function loadPrompts(): Record<string, any> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (err) {
    console.error("Failed to load prompts:", err);
    return {};
  }
}

export function savePrompts(data: Record<string, any>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save prompts:", err);
  }
}
