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

export type PromptVersion = {
  version: string;
  template: string;
  date: string;
};
