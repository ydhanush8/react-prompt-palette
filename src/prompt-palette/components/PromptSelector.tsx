import { useState } from "react";
import { usePromptPalette } from "../hooks/usePromptPalette";
import type { Prompt } from "../types/prompt";

type PromptSelectorProps = {
  onSelect: (prompt: Prompt) => void;
};

export const PromptSelector: React.FC<PromptSelectorProps> = ({ onSelect }) => {
  const { prompts } = usePromptPalette();
  const [search, setSearch] = useState("");

  const filteredPrompts = prompts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 border rounded-lg w-full max-w-md shadow bg-white text-black">
      <input
        type="text"
        placeholder="Search prompts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-3"
      />
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {filteredPrompts.length === 0 && (
          <li className="text-sm text-gray-500">No prompts found.</li>
        )}
        {filteredPrompts.map((prompt) => (
          <li
            key={prompt.id}
            onClick={() => onSelect(prompt)}
            className="cursor-pointer px-3 py-2 border hover:bg-gray-100 rounded transition"
          >
            <div className="font-semibold">{prompt.title}</div>
            <div className="text-xs text-gray-600">{prompt.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
