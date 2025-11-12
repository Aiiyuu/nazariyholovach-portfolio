import { Overlay } from "@/components/home/ShortProjectList/types";

export interface Project {
  id: string;
  thumbnail: string;
  stack: string[];
  overlay: Overlay;
  demoLink?: string;
  category?: Category;
  tags?: string[];
}

export enum Category {
  ALL = "all",
  VIDEO_GAMES = "video_games",
  ART = "art",
  WORK_SCHOOL = "work_school",
}

export enum Tag {
  ALL = "all",
  ART = "art",
  MUSEUM = "museum",
  SPACE = "space",
  ADVENTURE = "adventure",
  RACE = "race",
  LOGIC = "logic",
  PUZZLE = "puzzle",
  OFFICE = "office",
  CAREER = "career",
}
