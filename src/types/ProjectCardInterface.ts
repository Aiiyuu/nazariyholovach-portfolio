export interface ProjectCardInterface {
  thumbnail: string;
  name: string;
  stack: string[];
  slogan: string;
  overlay: Overlay;
  demoLink?: string;
}

type Overlay = "dark" | "light";
