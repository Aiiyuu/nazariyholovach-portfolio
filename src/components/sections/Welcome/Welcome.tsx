import React from "react";
import "./Welcome.scss";
import astronautImg from "../../../assets/images/astronaut.svg";
import StaggeredWords from "../../animations/StaggeredWords";
import StaggeredLines from "../../animations/StaggeredLines";
import SlideIn from "../../animations/SlideIn";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const imgOverlayVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.8, delay: 0.2, ease: "easeInOut" },
  },
};

const imgVariantFasterNoOpacity: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
  },
};

const Welcome: React.FC = () => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: welcomeRef,
    offset: ["start end", "end start"],
  });

  const astronautY = useTransform(scrollYProgress, [0.3, 1], [0, 230]);
  const astronautOpacity = useTransform(scrollYProgress, [0.3, 1], [1, 0.8]);

  return (
    <div className="welcome" ref={welcomeRef}>
      <div className="welcome__block">
        <h1 className="welcome__title">
          <StaggeredWords delay={0.02}>Where Code Meets</StaggeredWords>

          <br />

          <StaggeredLines>Cosmos</StaggeredLines>
        </h1>

        <div className="welcome__text">
          <StaggeredLines>
            Glad you’ve found this place – relax,//nthe code’s mostly stable
          </StaggeredLines>
        </div>

        <div className="welcome__achievement-section">
          <div className="welcome__achievement">
            <SlideIn direction="up" scale={0.8}>
              <h4 className="welcome__achievement-title">13</h4>
            </SlideIn>
            <div className="welcome__achievement-description">
              <StaggeredLines>projects//ncompleted</StaggeredLines>
            </div>
          </div>

          <div className="welcome__achievement">
            <SlideIn direction="up" scale={0.8}>
              <h4 className="welcome__achievement-title">1</h4>
            </SlideIn>
            <div className="welcome__achievement-description">
              <StaggeredLines>years of//nexperience</StaggeredLines>
            </div>
          </div>
        </div>

        <div className="welcome__button">I'll add button later</div>
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

export default Welcome;
