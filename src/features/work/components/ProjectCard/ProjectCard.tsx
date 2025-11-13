import React from "react";
import "./ProjectCard.scss";
import { Project } from "@/features/work";
import { useTranslation } from "react-i18next";
import { Pillow } from "@/shared/components/ui";
import { SlideIn } from "@/shared/components/animations";
import { motion } from "framer-motion";
import {
  thumbnailHeaderVariants,
  thumbnailVariants,
  transition,
} from "./anims";

type Props = { project: Project };

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation("projects");
  const { thumbnail, id, tags } = project;

  return (
    <article className="work-card">
      <motion.div
        className="work-card__header"
        variants={thumbnailHeaderVariants}
        initial="initial"
        whileInView="visible"
      >
        <motion.img
          className="work-card__thumbnail"
          loading="lazy"
          src={thumbnail}
          alt={id}
          variants={thumbnailVariants}
          initial="initial"
          whileHover="hover"
          transition={transition}
        />
      </motion.div>

      <div className="work-card__footer">
        <SlideIn delay={0.3}>
          <h5 className="work-card__name">{t(`${id}.name`)}</h5>
        </SlideIn>

        <ul className="work-card__tags">
          {tags?.map((tag, index) => (
            <li className="work-card__tags-item" key={`${id}-${tag}`}>
              <SlideIn delay={0.3 + 0.1 * index}>
                <Pillow>{t(`tags.${tag}`)}</Pillow>
              </SlideIn>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
