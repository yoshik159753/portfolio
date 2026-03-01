import { useState } from "react";
import { animateScroll, scroller } from "react-scroll";

const navItems = [
  { to: "works", caption: "職務経歴" },
  { to: "skills", caption: "技術スタック" },
  { to: "products", caption: "Products" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (to) => {
    setIsMenuOpen(false);
    if (to === "top") {
      animateScroll.scrollToTop({});
    } else {
      scroller.scrollTo(to);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-[1000]">
      <nav className="h-full">
        <div className="max-w-[960px] mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <a
              className="text-lg font-bold text-neutral-900 cursor-pointer"
              onClick={() => handleNavClick("top")}
            >
              Yoshi K &apos;s Portfolio.
            </a>
            {/* TODO: ハンバーガーメニューの見直し。アイコン使いたい */}
            <button
              className="flex flex-col gap-1 w-7 h-6 z-[1001] cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              <span className="block w-full h-0.5 bg-neutral-900 transition-all duration-150"></span>
              <span className="block w-full h-0.5 bg-neutral-900 transition-all duration-150"></span>
              <span className="block w-full h-0.5 bg-neutral-900 transition-all duration-150"></span>
            </button>
            {/* TODO: レスポンシブの見直し。スタイル長すぎ */}
            <ul
              className={`fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 transition-all duration-250 md:static md:flex-row md:translate-y-0 md:opacity-100 md:pointer-events-auto md:p-0 md:border-none md:bg-transparent md:items-center ${
                isMenuOpen
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }`}
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="px-4 py-2 rounded-lg font-medium transition-colors duration-150 hover:bg-neutral-100 cursor-pointer"
                    onClick={() => handleNavClick(item.to)}
                  >
                    {item.caption}
                  </a>
                </li>
              ))}
              <li className="h-px bg-neutral-200 my-2 md:w-px md:h-5 md:my-0 md:mx-2"></li>
              <li>
                <a
                  href="https://github.com/yoshik159753/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium transition-colors duration-150 hover:bg-neutral-100"
                >
                  GitHub
                </a>
              </li>
              {/* TODO: 最終更新日はフッターに移行する */}
              <li>
                <span className="px-4 py-2 text-neutral-500 text-sm">
                  最終更新: 2022年11月
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
