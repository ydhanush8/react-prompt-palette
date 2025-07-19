# react-prompt-palette

A React + TypeScript library for managing reusable AI prompts with localStorage support and styled UI components using Tailwind CSS.

## Features

* Save and reuse prompt templates
* Searchable prompt selector component
* Persistent localStorage storage
* Easy integration with AI/chat interfaces
* Type-safe with full TypeScript support
* Optional versioning-ready structure

## Installation

```bash
npm install react-prompt-palette
```

> Peer dependencies: `react`, `react-dom`

---

## Usage

### 1. Wrap your app with the provider

```tsx
import { PromptPaletteProvider } from "react-prompt-palette";

<PromptPaletteProvider>
  <App />
</PromptPaletteProvider>
```

### 2. Use the PromptSelector

```tsx
import { PromptSelector } from "react-prompt-palette";

<PromptSelector onSelect={(prompt) => setInput(prompt.template)} />
```

### 3. (Optional) Use the NewPromptForm

```tsx
import { NewPromptForm } from "react-prompt-palette";

<NewPromptForm />
```

### 4. Use the custom hook

```tsx
import { usePromptPalette } from "react-prompt-palette";

const { prompts, savePrompt, getPrompt, updatePrompt } = usePromptPalette();
```

---

## Prompt Type

```ts
export type Prompt = {
  id: string;
  title: string;
  description?: string;
  template: string;
  category?: string;
  model?: string;
  version?: string;
  lastUpdated?: string;
};
```

---

## Example

```tsx
import { useState } from "react";
import {
  PromptPaletteProvider,
  PromptSelector,
  NewPromptForm,
} from "react-prompt-palette";

function ChatApp() {
  const [input, setInput] = useState("");

  return (
    <PromptPaletteProvider>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <NewPromptForm />
      <PromptSelector onSelect={(prompt) => setInput(prompt.template)} />
    </PromptPaletteProvider>
  );
}
```

---

## Tech Stack

* React 18+
* Tailwind CSS
* TypeScript
* Vite (for development)
* tsup (for bundling)

---

## License

MIT
