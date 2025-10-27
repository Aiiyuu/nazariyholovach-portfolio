export interface ProjectCard {
  id: string;
  thumbnail: string;
  stack: string[];
  overlay: Overlay;
  demoLink?: string;
}

type Overlay = "dark" | "light";
