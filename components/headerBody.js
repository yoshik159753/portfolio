import Image from "next/image";

export const scrollToWorks = "works";
export const scrollToSkills = "skills";
export const scrollToProducts = "products";

const navItems = [
  { to: scrollToWorks, caption: "職務経歴" },
  { to: scrollToSkills, caption: "技術スタック" },
  { to: scrollToProducts, caption: "作品" },
];

const HeaderBody = () => {
  return (
    <nav className="h-full">
      <div className="max-w-[960px] mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <a
            className="text-lg font-bold text-neutral-900 cursor-pointer"
            href="#"
          >
            Yoshi K &apos;s Portfolio.
          </a>
          <div className="flex items-center gap-2">
            <ul className="list-none hidden md:flex md:flex-row md:items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-neutral-100"
                    href={"#" + item.to}
                  >
                    {item.caption}
                  </a>
                </li>
              ))}
              <li className="w-px h-5 mx-2 bg-neutral-200"></li>
            </ul>
            <a
              href="https://github.com/yoshik159753/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-neutral-100"
            >
              <Image
                src="/images/icons/github.svg"
                alt="github"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBody;
