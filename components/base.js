import Header from "./header";
// import Nav from "./nav";
import Footer from "./footer";

const Base = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="container">
        {/* <div className="">
          <Nav />
        </div> */}
        <div className="mt-3 pb-5">{children}</div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default Base;
