import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Markdown = ({ children, components, ...props }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        ul: ({ children }) => (
          <ul className="list-disc pl-6 flex flex-col gap-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 flex flex-col gap-1">{children}</ol>
        ),
        em: ({ children }) => <em className="text-neutral-500">{children}</em>,
        p: ({ children }) => <p className="mb-4">{children}</p>,
        ...components,
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
