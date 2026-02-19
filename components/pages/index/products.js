import Image from "next/image";

import styles from "./products.module.css";

// ref. https://stackoverflow.com/questions/29722270/is-it-possible-to-import-modules-from-all-files-in-a-directory-using-a-wildcard
import portfolioImg from "@/public/images/products/portfolio.png";
import flaskrImg from "@/public/images/products/flaskr.png";
import nixTipsImg from "@/public/images/products/nix-tips.png";
import howManyPersonHourImg from "@/public/images/products/how_many_person_hour.png";

const Card = ({ img, title, text, tech, link }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className="row no-gutters">
        <div className="col-md-4 p-0">
          <div className="ps-4 pe-4 pe-md-0 pt-3 pb-3">
            <Image
              src={img}
              alt="preview"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="col-md-8 p-0">
          <div className="card-body py-3 py-md-3 px-5 px-md-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">使用技術: {tech}</p>
            <div className="card-link">{link}</div>
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
