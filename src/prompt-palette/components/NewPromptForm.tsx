import { useState } from "react";
import { usePromptPalette } from "../hooks/usePromptPalette";
import type { Prompt } from "../types/prompt";

export const NewPromptForm = () => {
  const { savePrompt } = usePromptPalette();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [template, setTemplate] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    if (!title || !template) return;

    const newPrompt: Prompt = {
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      description,
      template,
      category,
      version: "1.0.0",
      lastUpdated: new Date().toISOString(),
    };

    savePrompt(newPrompt);

    setTitle("");
    setDescription("");
    setTemplate("");
    setCategory("");
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow w-full max-w-md mb-8">
      <h2 className="text-lg font-semibold mb-2">Save New Prompt</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Prompt Title"
        className="w-full border p-2 rounded mb-2"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short Description"
        className="w-full border p-2 rounded mb-2"
      />

      <textarea
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        placeholder="Prompt Template"
        className="w-full border p-2 rounded mb-2 h-24"
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (optional)"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Save Prompt
      </button>
    </div>
  );
};
