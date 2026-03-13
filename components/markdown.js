import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Markdown = ({ children, components, ...props }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      {...(components && { components })}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
