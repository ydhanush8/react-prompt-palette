import { useState } from "react";
import {
  PromptPaletteProvider,
  PromptSelector,
  NewPromptForm,
} from "./prompt-palette";

function App() {
  const [input, setInput] = useState("");

  return (
    <PromptPaletteProvider>
      <div className="min-h-screen bg-gray-100 p-8 text-black">
        <h1 className="text-2xl font-bold mb-4">Chat Input</h1>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-24 p-3 border rounded mb-6"
        />

        <NewPromptForm />
        <PromptSelector onSelect={(prompt) => setInput(prompt.template)} />
      </div>
    </PromptPaletteProvider>
  );
}

export default App;
