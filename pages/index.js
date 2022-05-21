import { getProfile } from "@/actions/api";
import PageContents from "../components/pages/index/pageContents";

const Index = ({ profile }) => {
  return <PageContents profile={profile} />;
};

export async function getServerSideProps(context) {
  const profile = await getProfile();
  return {
    props: { profile },
  };
}

export default Index;
