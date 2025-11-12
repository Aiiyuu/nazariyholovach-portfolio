import React from "react";
import "./ProjectCard.scss";
import { Project } from "@/types/project";
import { useTranslation } from "react-i18next";
import Pillow from "@/components/ui/Pillow";
import SlideIn from "@/components/animations/SlideIn";
import { motion } from "framer-motion";
import { thumbnailVariants, transition } from "./anims";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation("projects");
  const { thumbnail, id, tags } = project;

  return (
    <article className="work-card">
      <div className="work-card__header">
        <motion.img
          className="work-card__thumbnail"
          loading="lazy"
          src={thumbnail}
          alt={id}
          variants={thumbnailVariants}
          whileHover="hover"
          transition={transition}
        />
      </div>

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

export default ProjectCard;
