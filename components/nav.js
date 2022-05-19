import { animateScroll, scroller } from "react-scroll";

import styles from "./nav.module.css";

const NavItem = ({ item }) => {
  const handleClick = (e, item) => {
    if (item.to === "top") {
      animateScroll.scrollToTop({});
      return;
    }
    scroller.scrollTo(item.to);
  };

  return (
    <a className={styles.navItem} onClick={(e) => handleClick(e, item)}>
      {item.caption}
    </a>
  );
};

const Nav = () => {
  const navItems = [
    // { to: "top", caption: "top" },
    { to: "body2", caption: "body2" },
    { to: "body3", caption: "body3" },
    { to: "body4", caption: "body4" },
    // {
    //   tag: "anchor",
    //   href: "https://github.com/yoshik159753",
    //   caption: "GitHub",
    // },
  ];

  return (
    <nav className={`nav d-flex justify-content-between ${styles.nav}`}>
      {navItems.map((item, index) => {
        return (
          <div className="p-2" key={index}>
            <NavItem item={item} />
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
