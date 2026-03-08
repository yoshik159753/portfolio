import Markdown from "@/components/markdown";
import PieDiag from "@/components/recharts/pieDiag";

const Skills = ({ skillSummary, children }) => {
  // 見出しを外だし(グラフを差し込みたいため)
  const title = children.match(/^##\s+(.+)/m)?.[1] ?? "";

  return (
    <>
      <h2 className="mb-4">{title}</h2>
      <div className="flex justify-around flex-wrap">
        {skillSummary.map((item, index) => {
          return (
            <PieDiag title={item.title} data={item.data} key={item.titleEn} />
          );
        })}
      </div>
      <Markdown components={{ h2: () => null }}>{children}</Markdown>;
    </>
  );
};

export default Skills;
