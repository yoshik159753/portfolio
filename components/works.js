import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "@/components/markdown/markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Works = ({ children }) => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div>
      <motion.div
        animate={{ height: isClosed ? 1200 : "auto" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative overflow-hidden"
      >
        <Markdown>{children}</Markdown>
        <AnimatePresence>
          {isClosed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
            />
          )}
        </AnimatePresence>
      </motion.div>
      {isClosed && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="flex items-center gap-2
                      px-8 py-2
                      border border-neutral-400 rounded-full
                      text-neutral-500 text-sm tracking-widest
                      hover:border-neutral-600 hover:text-neutral-700
                      transition-colors duration-200
                      cursor-pointer"
            onClick={() => setIsClosed(false)}
          >
            <span>show more...</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Works;
