import { useRef, useState, useEffect, useCallback } from "react";

export const useDropdown = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showDropdown = useCallback(() => {
    const list = listRef.current;
    const wrapper = wrapperRef.current;

    if (wrapper && list) {
      wrapper.style.height = `${list.clientHeight}px`;
    }
  }, []);

  const hideDropdown = useCallback(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      wrapper.style.height = "0px";
    }
  }, []);

  const toggleDropdown = useCallback((event?: React.MouseEvent) => {
    event?.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isOpen) showDropdown();
    else hideDropdown();
  }, [isOpen, showDropdown, hideDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      if (!wrapper.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Important: use *bubbling phase* (false) to avoid timing conflicts
    document.addEventListener("click", handleClickOutside, false);
    return () =>
      document.removeEventListener("click", handleClickOutside, false);
  }, []);

  return { listRef, wrapperRef, isOpen, toggleDropdown };
};
