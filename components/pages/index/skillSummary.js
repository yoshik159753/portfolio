import PieDiag from "@/components/recharts/pieDiag";

const SkillSummary = ({ skillSummary }) => {
  return (
    <div className="flex justify-around flex-wrap">
      {skillSummary.map((item, index) => {
        return (
          <PieDiag title={item.title} data={item.data} key={item.titleEn} />
        );
      })}
    </div>
  );
};

export default SkillSummary;
