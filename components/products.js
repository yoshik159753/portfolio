import Image from "next/image";

import styles from "./products.module.css";

// ref. https://stackoverflow.com/questions/29722270/is-it-possible-to-import-modules-from-all-files-in-a-directory-using-a-wildcard
import portfolioImg from "@/public/images/products/portfolio.png";
import flaskrImg from "@/public/images/products/flaskr.png";
import nixTipsImg from "@/public/images/products/nix-tips.png";
import howManyPersonHourImg from "@/public/images/products/how_many_person_hour.png";

const Card = ({ img, title, text, tech, link }) => {
  return (
    <div className={`border rounded overflow-hidden ${styles.card}`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="pl-6 pr-6 md:pr-0 pt-4 pb-4">
            <Image
              src={img}
              alt="preview"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }} />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="py-4 md:py-4 px-12 md:px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="mb-4">{text}</p>
            <p className="mb-4">使用技術: {tech}</p>
            <div>{link}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const cards = [
    {
      img: portfolioImg,
      title: "Portfolio",
      text: `本ページです。`,
      tech: `Next.js, Vercel`,
      link: <a href="https://portfolio-yoshik159753.vercel.app/">Link</a>,
    },
    {
      img: nixTipsImg,
      title: "*nix tips",
      text: `よく使用する Unix や Linux のコマンド、また各種プログラミングの言語の Tips をまとめたサイトです。
      メンテナンス性や表現力が高い Asciidoc を使用しています。`,
      tech: `Asciidoc, GitHub Pages`,
      link: (
        <a
          href="https://yoshik159753.github.io/dev-tips/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Link
        </a>
      ),
    },
    {
      img: flaskrImg,
      title: "Flaskr with React",
      text: `React の素振りとして、 Flask のチュートリアルを React で再現しています。
      バックエンドは Flask アプリを Heroku にデプロイし、フロントエンドは React アプリを Vercel にデプロイしています。(heroku の無料枠終了に伴い停止中)`,
      tech: `Python, Flask, React, Heroku, Vercel`,
      link: (
        <span>停止中</span>
      ),
    },
    {
      img: howManyPersonHourImg,
      title: "How many person hour?",
      text: "React の素振りとして作成した工数算出ツールです。",
      tech: `React, Vercel`,
      link: (
        <a
          href="https://how-many-person-hour.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Link
        </a>
      ),
    },
  ];

  return cards.map((card, index) => (
    <div className={`${styles.cards}`} key={index}>
      <Card
        img={card.img}
        title={card.title}
        text={card.text}
        tech={card.tech}
        link={card.link}
      />
    </div>
  ));
};

export default Products;
