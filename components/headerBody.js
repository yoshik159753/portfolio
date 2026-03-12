import Image from "next/image";
import { useState, useEffect } from "react";

export const scrollToSkillSummary = "skillSummary";
export const scrollToWorks = "works";
export const scrollToSkillSet = "skillSet";
export const scrollToProducts = "products";

const navItems = [
  { to: scrollToSkillSummary, caption: "スキルサマリ" },
  { to: scrollToWorks, caption: "職務経歴" },
  { to: scrollToSkillSet, caption: "スキルセット" },
  { to: scrollToProducts, caption: "作品" },
];

const HeaderBody = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // IntersectionObserver は要素がビューポートと交差したタイミングを検知するブラウザ API。
    // ここでいう「交差」とは、監視対象の要素が画面の表示領域（ビューポート）に
    // 一定割合以上入り込んだ状態のこと。rootMargin で判定領域を絞ることで
    // 「画面中央に差し掛かった」という独自の交差条件を定義できる。
    //
    // ※ コンストラクタ時点では監視対象を指定しない。
    //   生成後に observer.observe(element) を呼ぶことで要素を個別に登録する仕組みのため、
    //   1つの observer インスタンスで複数要素をまとめて監視できる。
    //
    // 流れをざっくり。
    //   1. new IntersectionObserver(callback, options) でオブザーバーを生成
    //   2. observer.observe(el) で監視対象要素を登録
    //   3. 登録後、条件（options）を満たした要素が出るたびに callback が呼ばれる
    //   4. callback 内で entries（変化のあった要素のリスト）を見て useState を更新
    //
    // 第1引数: 交差状態が変化した要素のリスト（entries）を受け取るコールバック
    //   コールバックは observe() 登録直後（初期状態の通知）と、
    //   その後は交差状態が変化するたび（入る・出る）に非同期で呼ばれる。
    // 第2引数: 判定条件オプション（rootMargin / threshold）
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.find((e) => e.isIntersecting);
        if (intersecting) {
          // スクロール中に複数セクションが同時に判定対象になることがあるため
          // find で最初の1件のみ採用し、競合を避ける
          setActiveSection(intersecting.target.id);
        } else if (entries.some((e) => e.boundingClientRect.top > 0)) {
          // top > 0 はセクションが画面中央より下にある（＝最上部に戻った）ことを示す
          // このときだけクリアすることで、セクション間の遷移では誤クリアしない
          setActiveSection("");
        }
      },
      // rootMargin で上下50%ずつ削ることで「画面中央を通過した瞬間」を判定基準にする
      // threshold:0 は判定ゾーンに少しでも入れば発火させるための設定
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    // 監視対象はナビリンクに対応する4セクション。
    // filter(Boolean) は、DOM 構築前に呼ばれた場合など getElementById が null を返すケースを除外するため。
    const elements = navItems
      .map((item) => document.getElementById(item.to))
      .filter(Boolean);
    // 監視対象を設定
    elements.forEach((el) => observer.observe(el));

    // 監視対象をクリーンアップ
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

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
                    className={`px-4 py-2 rounded-lg
                              transition-colors duration-200
                              hover:bg-neutral-100
                              ${
                                activeSection === item.to
                                  ? "bg-neutral-100"
                                  : ""
                              }`}
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
