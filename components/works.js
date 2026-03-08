import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/works.module.css";

const Works = ({ children }) => {
  const [isClosed, setIsClosed] = useState(true);

  // 見出しを外だし(タイムライン縦線の対象外とするため)
  const title = children.match(/^##\s+(.+)/m)?.[1] ?? "";

  return (
    <div>
      <motion.div
        animate={{ height: isClosed ? 1200 : "auto" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative overflow-hidden"
      >
        <h2 className="mb-4">{title}</h2>
        <div className={styles.timeline}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{ h2: () => null }}
          >
            {children}
          </ReactMarkdown>
        </div>
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
            className="flex items-center justify-center gap-2
                      w-full md:w-auto
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
