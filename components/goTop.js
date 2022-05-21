import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

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
      {isVisible && (
        <div className={styles.iconBody} onClick={handleClick}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </div>
  );
};

export default GoTop;
