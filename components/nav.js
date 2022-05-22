import { animateScroll, scroller } from "react-scroll";

import {
  scrollToWorks,
  scrollToSkills,
  scrollToProducts,
} from "./pages/index/pageContents";

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
    { to: scrollToWorks, caption: "職務経歴" },
    { to: scrollToSkills, caption: "技術スタック" },
    { to: scrollToProducts, caption: "Products" },
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
