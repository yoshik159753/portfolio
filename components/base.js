import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import GoTop from "./goTop";

const Base = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="max-w-[720px] mx-auto px-4">
        <div className="">
          <Nav />
        </div>
        <div className="mt-4 pb-12">{children}</div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <GoTop />
    </>
  );
};

export default Base;
