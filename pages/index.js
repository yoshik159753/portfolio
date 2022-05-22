import {
  getProfile,
  getSkills,
  getSkillSummary,
  getWorks,
} from "@/actions/api";
import PageContents from "../components/pages/index/pageContents";

const Index = ({ profile, works, skillSummary, skills }) => {
  return (
    <PageContents
      profile={profile}
      works={works}
      skillSummary={skillSummary}
      skills={skills}
    />
  );
};

export async function getServerSideProps(context) {
  const profile = await getProfile();
  const works = await getWorks();
  const skillSummary = await getSkillSummary();
  const skills = await getSkills();
  return {
    props: { profile, works, skillSummary, skills },
  };
}

export default Index;
