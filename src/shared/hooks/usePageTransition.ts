/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TRANSITION_SCREEN_DURATION } from "@/shared/components/animations/TransitionScreen";
import { Language } from "@/shared/components/ui/LanguageSwitcher/types";

const DEFAULT_LOCATION = "home";

export function usePageTransition() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [title, setTitle] = useState<string>(DEFAULT_LOCATION);

  const computeTitle = (pathname: string) => {
    const pathParts = pathname.slice(1).split("/").filter(Boolean);
    if (pathParts.length === 0) return DEFAULT_LOCATION;

    if (Object.values(Language).includes(pathParts.at(-1) as Language)) {
      return pathParts.length > 1 ? pathParts.at(-2)! : DEFAULT_LOCATION;
    } else {
      return pathParts.at(-1)!;
    }
  };

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setTitle(computeTitle(location.pathname));
      setShowTransition(true);

      const timer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setShowTransition(false);
      }, TRANSITION_SCREEN_DURATION);

      return () => clearTimeout(timer);
    }
  }, [location, currentPath]);

  useEffect(() => {
    setTitle(computeTitle(location.pathname));
  }, []);

  return { showTransition, title };
}
