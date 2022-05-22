import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import styles from "./markdown.module.css";

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      className={styles.reactMarkDown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
