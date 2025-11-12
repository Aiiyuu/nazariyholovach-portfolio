import React from "react";
import "./Welcome.scss";
import astronautImg from "@/features/home/assets/astronaut.svg";
import {
  StaggeredWords,
  StaggeredLines,
  SlideIn,
} from "@/shared/components/animations";
import { Button } from "@/shared/components/ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { imgOverlayVariant, imgVariantFasterNoOpacity } from "./anims";

export const Welcome: React.FC = () => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: welcomeRef,
    offset: ["start end", "end start"],
  });

  const astronautY = useTransform(scrollYProgress, [0.3, 1], [0, 230]);
  const astronautOpacity = useTransform(scrollYProgress, [0.3, 1], [1, 0.8]);

  const { t } = useTranslation(["welcome", "common"]);

  return (
    <div id="introduction" className="welcome" ref={welcomeRef}>
      <div className="welcome__block">
        <h1 className="welcome__title">
          <StaggeredWords delay={0.02}>
            {t("welcome:title.title")}
          </StaggeredWords>

          <br />

          <StaggeredLines>{t("welcome:title.main")}</StaggeredLines>
        </h1>

        <div className="welcome__text">
          <StaggeredLines>{t("welcome:text")}</StaggeredLines>
        </div>

        <div className="welcome__achievement-section">
          <div className="welcome__achievement">
            <SlideIn direction="up" scale={0.8}>
              <h4 className="welcome__achievement-title">13</h4>
            </SlideIn>
            <div className="welcome__achievement-description">
              <StaggeredLines>
                {t("welcome:welcomeExperience.projectsCompleted")}
              </StaggeredLines>
            </div>
          </div>

          <div className="welcome__achievement">
            <SlideIn direction="up" scale={0.8}>
              <h4 className="welcome__achievement-title">1</h4>
            </SlideIn>
            <div className="welcome__achievement-description">
              <StaggeredLines>
                {t("welcome:welcomeExperience.yearsOfExperience")}
              </StaggeredLines>
            </div>
          </div>
        </div>

        <div className="welcome__btn">
          <SlideIn delay={0.3}>
            <Button>{t("common:aboutMeBtn")}</Button>
          </SlideIn>
        </div>
      </div>

      <motion.div
        className="welcome__block"
        style={{ y: astronautY, opacity: astronautOpacity }}
      >
        <motion.div
          className="nav__block-overlay"
          variants={imgOverlayVariant}
          initial="hidden"
          whileInView="visible"
        ></motion.div>

        <motion.img
          src={astronautImg}
          alt="astronaut"
          variants={imgVariantFasterNoOpacity}
          initial="hidden"
          whileInView="visible"
        />
      </motion.div>
    </div>
  );
};
