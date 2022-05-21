import { getProfile, getWorks } from "@/actions/api";
import PageContents from "../components/pages/index/pageContents";

const Index = ({ profile, works }) => {
  return <PageContents profile={profile} works={works} />;
};

export async function getServerSideProps(context) {
  const profile = await getProfile();
  const works = await getWorks();
  return {
    props: { profile, works },
  };
}

export default Index;
