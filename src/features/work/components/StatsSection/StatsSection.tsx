import React from "react";
import WrapperBg from "@/shared/assets/icons/wrapper-bg.svg?react";
import "./StatsSection.scss";
import { Counter } from "@/shared/components/animations/Counter";

type Props = {
  children: React.ReactNode;
  years: number;
};

export const StatsSection: React.FC<Props> = ({ children, years }) => {
  return (
    <div className="stat">
      <div className="stat__count-wrapper">
        <span className="stat__count">
          <Counter number={years} duration={1} />
        </span>

        <WrapperBg />
      </div>

      <p className="stat__text">{children}</p>
    </div>
  );
};
