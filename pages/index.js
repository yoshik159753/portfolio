import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import useHttpRequest from "../hooks/useHttpRequest";
import Base from "../components/base";
import Spinner from "../components/spinner";

import styles from "../styles/index.module.css";

export const getProfile = async (params) => {
  return await axios.get(`/api/admin/current-user`);
};

const Main = () => {
  const [{ response, isError, isLoading }, getProfileClient] = useHttpRequest(
    getProfile,
    true
  );

  useEffect(() => {
    getProfileClient();
  }, [getProfileClient]);

  if (isLoading) {
    return <Spinner />;
  }

  // TODO: 意外と markdown の解析に時間がかかるので、そこもローディングを表示したい
  return (
    <div className={`border rounded px-5 py-3 ${styles.main}`}>
      {/* <ReactMarkdown
        children={profile}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      /> */}
      main
    </div>
  );
};

const Index = () => {
  return (
    <Base>
      <Main />
    </Base>
  );
};

export default Index;
