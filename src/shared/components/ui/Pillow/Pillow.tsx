import React, { ReactNode } from "react";
import { Color, Size } from "./types";
import "./Pillow.scss";

type Props = { children: ReactNode; color?: Color; size?: Size };

export const Pillow: React.FC<Props> = ({
  children,
  color = Color.THEME,
  size = Size.SM,
}) => {
  return (
    <span className={`pillow pillow--${color} pillow--${size}`}>
      {children}
    </span>
  );
};
