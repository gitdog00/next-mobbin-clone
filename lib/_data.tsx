import { Icons } from "@/components/icons";

interface CategoryCommandProps {
  key: string;
  label: string;
  icon: React.ReactElement;
}

export const categoriesCommand: CategoryCommandProps[] = [
  {
    key: "trending",
    label: "Trending",
    icon: <Icons.sparkles className="size-4" />,
  },
  {
    key: "chatgpt",
    label: "ChatGPT",
    icon: <Icons.bot className="size-4" />,
  },
  {
    key: "gemini",
    label: "Gemini",
    icon: <Icons.gem className="size-4" />,
  },
  {
    key: "grok",
    label: "Grok",
    icon: <Icons.brain className="size-4" />,
  },
];

export const categoriesList: string[] = [
  "Writing",
  "Programming",
  "Analysis",
  "Creative",
  "Business",
  "Education",
  "Research",
  "Data Science",
  "Marketing",
  "Personal Growth",
  "Problem Solving",
  "Content Creation",
  "Translation",
  "Brainstorming",
  "Task Automation",
];