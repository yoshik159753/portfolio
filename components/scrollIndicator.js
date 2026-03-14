"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function ScrollIndicator() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsAtTop(window.scrollY < 30), {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <span
      className={`absolute bottom-6 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-1 text-neutral-500 animate-bounce
        transition-opacity duration-300
        ${isAtTop ? "opacity-100" : "opacity-0"}`}
      aria-label="スクロールして続きを見る"
    >
      <span className="tracking-widest">scroll</span>
      <FontAwesomeIcon icon={faAnglesDown} className="w-4 h-4" />
    </span>
  );
}
