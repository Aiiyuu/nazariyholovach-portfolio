export interface Skill {
  name: string;
  stack: Stack[];
}

export interface Stack {
  name: string;
  status: string;
  icon: string;
}
