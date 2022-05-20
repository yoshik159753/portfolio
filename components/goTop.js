import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";

import styles from "./goTop.module.css";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  const handleClick = (e) => {
    animateScroll.scrollToTop({ duration: 0 });
  };

  return (
    <div className={styles.scrollToTop}>
      {isVisible && <div onClick={handleClick}>To Top!</div>}
    </div>
  );
};

export default GoTop;
