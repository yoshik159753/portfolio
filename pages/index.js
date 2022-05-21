import { getProfile, getSkillSummary, getWorks } from "@/actions/api";
import PageContents from "../components/pages/index/pageContents";

const Index = ({ profile, works, skillSummary }) => {
  return (
    <PageContents profile={profile} works={works} skillSummary={skillSummary} />
  );
};

export async function getServerSideProps(context) {
  const profile = await getProfile();
  const works = await getWorks();
  const skillSummary = await getSkillSummary();
  return {
    props: { profile, works, skillSummary },
  };
}

export default Index;
