import Image from "next/image";

import portfolioImg from "@/public/images/products/portfolio.png";
import nixTipsImg from "@/public/images/products/nix-tips.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, title, text, tech, link }) => {
  return (
    <div
      className="bg-white overflow-hidden
                border border-neutral-200  rounded-xl
                transition-all duration-300
                hover:border-neutral-300 hover:-translate-y-1 hover:shadow-xs"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="relative w-full h-48 md:min-h-[150px] md:h-full">
            <Image
              src={img}
              alt="preview"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="px-4 pt-2 pb-4 md:pb-2 flex flex-col flex-grow">
            <h5 className="font-semibold">{title}</h5>
            <div className="mt-1">{text}</div>
            <div className="mt-2 flex items-center">
              使用技術: <div className="ml-1 flex gap-1">{tech}</div>
            </div>
            {link && (
              <div className="mt-4 flex">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2
                        w-full md:w-auto
                        px-8 py-1
                        border border-neutral-400 rounded-full
                        text-neutral-500 tracking-widest
                        hover:border-neutral-600 hover:text-neutral-700
                        transition-colors duration-200
                        cursor-pointer"
                >
                  <span>link</span>
                  <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const Img = ({ src, alt }) => <img src={src} alt={alt} width="20" height="20" />

  const cards = [
    {
      img: portfolioImg,
      title: "Portfolio",
      text: "本ページです。",
      tech:
        <>
          <Img src="/images/icons/nextjs.svg" alt="nextjs" /><Img src="/images/icons/tailwindcss.svg" alt="tailwindcss" /><Img src="/images/icons/vercel.svg" alt="vercel" />
        </>,
      link: "",
    },
    {
      img: nixTipsImg,
      title: "dev tips",
      text: `個人的な開発に関する Tips をまとめたサイトです。
            メンテナンス性や表現力が高い Asciidoc(tor) と 11ty を組み合わせて使用しています。`,
      tech:
        <>
          <Img src="/images/icons/asciidoctor.svg" alt="asciidoctor" /><Img src="/images/icons/eleventy.svg" alt="eleventy" /><Img src="/images/icons/vercel.svg" alt="vercel" />
        </>,
      link: "https://dev-tips.pleasurecode.jp/",
    },
  ];

  return (
    <>
      <h2>作品</h2>
      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <Card
            img={card.img}
            title={card.title}
            text={card.text}
            tech={card.tech}
            link={card.link}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
