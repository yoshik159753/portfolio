import { Link } from "react-router-dom";

import styles from "./nav.module.css";

const Nav = () => {
  const navItems = [
    { tag: "link", href: "/", caption: "トップ" },
    { tag: "link", href: "/resume", caption: "職務経歴など" },
    { tag: "link", href: "/products", caption: "MyProducts" },
    {
      tag: "anchor",
      href: "https://github.com/yoshik159753",
      caption: "GitHub",
    },
  ];

  const NavItem = ({ item }) => {
    if (item.tag === "anchor") {
      return (
        <a className="text-muted" href={item.href}>
          {item.caption}
        </a>
      );
    }
    return (
      <Link className="text-muted" to={item.href}>
        {item.caption}
      </Link>
    );
  };

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
