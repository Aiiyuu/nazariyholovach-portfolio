declare module "*.svg?react" {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const defaultExport: string;
  export default defaultExport;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
