import Image from "next/image";
import { animateScroll, scroller } from "react-scroll";

import {
  scrollToWorks,
  scrollToSkills,
  scrollToProducts,
} from "./pages/index/index";

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
  ];

  return (
    <nav
      className={`flex justify-around items-center ${styles.nav}`}
    >
      {navItems.map((item, index) => {
        return (
          <div className={styles.navItemBlcok} key={index}>
            <NavItem item={item} />
          </div>
        );
      })}
      <div className={styles.navItemBlcok}>
        <a
          href="https://github.com/yoshik159753/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
            alt="github"
            width="30"
            height="30"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
