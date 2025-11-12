import React from "react";
import { Stack } from "./types";
import "./StackItemCard.scss";
import { useTranslation } from "react-i18next";
import WrapperBg from "@/assets/icons/wrapper-bg.svg?react";

type Props = {
  skill: Stack;
};

const StackItemCard: React.FC<Props> = ({ skill }) => {
  const { name, status, icon: Icon } = skill;
  const { t } = useTranslation("skills");

  return (
    <div className="stack-card">
      <div className="stack-card__logo">
        <div className="stack-card__bg">
          <WrapperBg />
        </div>
        <div className="stack-card__icon">
          <Icon />
        </div>
      </div>

      <div className="stack-card__text-content">
        <h5 className="stack-card__title">{name}</h5>
        <p className="stack-card__status">{t(`status.${status}`)}</p>
      </div>
    </div>
  );
};

export default StackItemCard;
