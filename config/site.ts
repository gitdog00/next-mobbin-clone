interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AI Prompt Library",
  description: "A comprehensive library of AI prompts for different language models",
  url: "https://ai-prompt-library.app",
  ogImage: "https://ai-prompt-library.app/og.jpg",
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername/ai-prompt-library",
  },
};