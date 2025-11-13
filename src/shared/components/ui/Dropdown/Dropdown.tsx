import React, { useState } from "react";
import "./Dropdown.scss";
import { Button } from "@/shared/components/ui";
import { useDropdown } from "@/shared/hooks";
import { SlideIn } from "@/shared/components/animations";
import clsx from "clsx";
import ArrowIcon from "@/shared/assets/icons/arrow.svg?react";
import { motion } from "framer-motion";
import { dropdownBtnVariants, getItemDelay } from "./anims";

type Props = {
  title: string;
  options: Record<string, string>;
  itemsPerColumn?: number;
  multiple?: boolean;
  defaultOptions?: string[];
  onSelect: (selected: string[]) => void;
};

export const Dropdown: React.FC<Props> = ({
  title,
  options,
  itemsPerColumn = 6,
  multiple = false,
  defaultOptions = [],
  onSelect,
}) => {
  const { listRef, wrapperRef, isOpen, toggleDropdown } = useDropdown();
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(defaultOptions);

  const optionEntries = Object.entries(options);
  const cols = Math.ceil(optionEntries.length / itemsPerColumn);
  const dropdownTitle = multiple ? title : `${title}: `;

  const handleSelection = (optionKey: string) => {
    let newSelection: string[] = [];
    const isAllOption = optionKey.toLowerCase() === "all";

    if (multiple) {
      if (isAllOption) {
        newSelection = ["all"];
      } else {
        const isSelected = selectedOptions.includes(optionKey);
        newSelection = isSelected
          ? selectedOptions.filter((item) => item !== optionKey)
          : [...selectedOptions.filter((item) => item !== "all"), optionKey];

        if (newSelection.length === 0) {
          newSelection = ["all"];
        }
      }
    } else {
      newSelection = selectedOptions[0] === optionKey ? [] : [optionKey];
    }

    setSelectedOptions(newSelection);
    onSelect(newSelection);

    if (!multiple) toggleDropdown();
  };

  return (
    <div className="dropdown">
      <motion.div
        className={clsx("dropdown__btn", {
          "dropdown__btn--collapsed": isOpen,
        })}
        onClick={toggleDropdown}
        variants={dropdownBtnVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Button size="sm" withMotion={false} color={"theme-light"}>
          <>
            {dropdownTitle}
            {!multiple && selectedOptions.length > 0 && (
              <span>{options[selectedOptions[0]]}</span>
            )}
            <span className="arrow-icon">
              <ArrowIcon />
            </span>
          </>
        </Button>
      </motion.div>

      <div className="dropdown__wrapper" ref={wrapperRef}>
        <ul
          className="dropdown__list"
          ref={listRef}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {optionEntries.map(([key, label], index) => (
            <li
              key={key}
              className={clsx("dropdown__item", {
                "dropdown__item--selected": selectedOptions.includes(key),
              })}
              onClick={() => handleSelection(key)}
            >
              <SlideIn delay={getItemDelay(index, cols)}>
                <span className="dropdown__option">{label}</span>
              </SlideIn>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
