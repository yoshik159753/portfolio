import { useState, useEffect, useCallback, useRef } from "react";
import Markdown from "@/components/markdown/markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./works.module.css";

const Works = ({ children }) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const currentState = useRef(null);
  const refTransitionBlcok = useRef(null);
  const [handleButtonCaption, setHandleButtonCaption] = useState("");

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setMaxHeight(node.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    handleClosed();
  }, []);

  const handleClosed = () => {
    currentState.current = "CLOSED";
    setHandleButtonCaption(
      <>
        <FontAwesomeIcon icon={faAngleDown} />
        <span className="ms-2">開く</span>
      </>
    );
    refTransitionBlcok.current.className = styles.close;
    refTransitionBlcok.current.style.height = "2000px";
  };

  const handleToOpen = () => {
    currentState.current = "TO_OPEN";
    setHandleButtonCaption("");
    refTransitionBlcok.current.className = styles.move;
    setTimeout(() => {
      handleToNext();
    }, 1);
  };

  const handleOpening = () => {
    currentState.current = "OPENING";
    refTransitionBlcok.current.style.height = `${maxHeight}px`;
    setTimeout(() => {
      handleToNext();
    }, 1000);
  };

  const handleOpened = () => {
    currentState.current = "OPENED";
    setHandleButtonCaption(
      <>
        <FontAwesomeIcon icon={faAngleUp} />
        <span className="ms-2">閉じる</span>
      </>
    );
    refTransitionBlcok.current.className = "";
    refTransitionBlcok.current.style.height = "auto";
  };

  const handleToClose = () => {
    currentState.current = "TO_CLOSE";
    setHandleButtonCaption("");
    refTransitionBlcok.current.className = styles.move;
    refTransitionBlcok.current.style.height = `${maxHeight}px`;
    setTimeout(() => {
      handleToNext();
    }, 1);
  };

  const handleClosing = () => {
    currentState.current = "CLOSING";
    refTransitionBlcok.current.style.height = "2000px";
    setTimeout(() => {
      handleToNext();
    }, 1000);
  };

  const handleToNext = () => {
    switch (currentState.current) {
      case "CLOSED":
        handleToOpen();
        return;
      case "TO_OPEN":
        handleOpening();
        return;
      case "OPENING":
        handleOpened();
        return;
      case "OPENED":
        handleToClose();
        return;
      case "TO_CLOSE":
        handleClosing();
        return;
      case "CLOSING":
        handleClosed();
        return;
      default:
        // TODO: 例外投げる
        return;
    }
  };

  return (
    <div className={styles.showMoreRoot} ref={measuredRef}>
      <div ref={refTransitionBlcok}>
        <Markdown>{children}</Markdown>
      </div>
      <div className="d-flex justify-content-center">
        {handleButtonCaption ? (
          <button
            type="button"
            className="btn btn-lg border rounded w-75 bg-light"
            onClick={handleToNext}
          >
            {handleButtonCaption}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Works;
