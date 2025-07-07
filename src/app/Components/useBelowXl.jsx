import React, { useEffect, useState } from "react";

export default function useBelowXl() {
  const [isBelowXl, setIsBelowXl] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1279px)");

    const updateMatch = () => {
      setIsBelowXl(mediaQuery.matches);
    };
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return isBelowXl;
}
