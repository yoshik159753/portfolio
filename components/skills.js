import Markdown from "@/components/markdown";

const ProgressBar = ({ val, max }) => {
  const percent = Math.round((val / max) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full bg-blue-500`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

const Table = ({ header, items }) => {
  return (
    <table
      className="table-fixed w-full border-collapse overflow-hidden
                border border-neutral-200 rounded-lg
                bg-white text-xs md:text-sm"
    >
      <thead>
        <tr>
          {header.map((col) => (
            <th
              key={col.label ?? col}
              className={`px-2 md:px-4 py-2
                          text-left font-semibold
                          border-b border-x-0 border-neutral-200
                          ${col.className ?? ""}`}
            >
              {col.label ?? col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-neutral-50">
            {Object.entries(item).map(([key, val]) => (
              <td
                key={key}
                className={`px-2 md:px-4 py-2
                            align-middle
                            border-x-0
                            ${
                              rowIndex < items.length - 1
                                ? "border-b border-neutral-200"
                                : ""
                            }`}
              >
                {key === "level" ? (
                  <ProgressBar val={val.val} max={val.max} />
                ) : (
                  val
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Skills = () => {
  // キャリア(WorkExperience)
  const WorkExperience = () => {
    const title = "キャリア";
    const header = [
      { label: "タイトル", className: "w-2/6" },
      { label: "実務経験", className: "w-1/6" },
      { label: "セルフスコア", className: "w-1/6" },
      { label: "備考", className: "w-2/6" },
    ];
    const items = [
      {
        name: "リード・マネジメント(予算・人員・進捗管理)",
        exp: "2年ほど",
        level: { val: 2, max: 5 },
        memo: "",
      },
      {
        name: "ビジネスドメイン(要件定義・顧客折衝)",
        exp: "2年ほど",
        level: { val: 2, max: 5 },
        memo: "",
      },
      {
        name: "アーキテクチャ(設計・技術選定)",
        exp: "3年以上",
        level: { val: 4, max: 5 },
        memo: "",
      },
      {
        name: "開発(実装・テスト)",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "プロセス改善(リリース戦略・自動化・品質管理)",
        exp: "2年ほど",
        level: { val: 2, max: 5 },
        memo: "",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // エンジニアリングドメイン(EngineeringDomain)
  const EngineeringDomain = () => {
    const title = "エンジニアリングドメイン";
    const header = [
      { label: "タイトル", className: "w-2/6" },
      { label: "実務経験", className: "w-1/6" },
      { label: "セルフスコア", className: "w-1/6" },
      { label: "備考", className: "w-2/6" },
    ];
    const items = [
      {
        name: "Web系バックエンド",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "Web系フロントエンド",
        exp: "5年以上",
        level: { val: 4, max: 5 },
        memo: "",
      },
      {
        name: "インフラ",
        exp: "1年ほど",
        level: { val: 2, max: 5 },
        memo: "",
      },
      {
        name: "Androidアプリケーション",
        exp: "1年ほど",
        level: { val: 1, max: 5 },
        memo: "最終実務使用: 2019年ごろ",
      },
      {
        name: "組み込み",
        exp: "2年ほど",
        level: { val: 1, max: 5 },
        memo: "最終実務使用: 2010年ごろ",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // プログラミング言語(ProgrammingLanguages)
  const ProgrammingLang = () => {
    const title = "プログラミング言語";
    const header = [
      { label: "タイトル", className: "w-2/6" },
      { label: "実務経験", className: "w-1/6" },
      { label: "セルフスコア", className: "w-1/6" },
      { label: "備考", className: "w-2/6" },
    ];
    const items = [
      {
        name: "Bash",
        exp: "5年以上",
        level: { val: 4, max: 5 },
        memo: "",
      },
      {
        name: "C",
        exp: "5年ほど",
        level: { val: 1, max: 5 },
        memo: "最終実務使用: 2014年ごろ",
      },
      {
        name: "C++",
        exp: "1年ほど",
        level: { val: 1, max: 5 },
        memo: "最終実務使用: 2015年ごろ",
      },
      {
        name: "Java",
        exp: "3年ほど",
        level: { val: 2, max: 5 },
        memo: "最終実務使用: 2019年ごろ",
      },
      {
        name: "JavaScript",
        exp: "5年ほど",
        level: { val: 4, max: 5 },
        memo: "",
      },
      {
        name: "PHP",
        exp: "3年ほど",
        level: { val: 2, max: 5 },
        memo: "最終実務使用: 2023年ごろ",
      },
      {
        name: "Python",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "SQL",
        exp: "5年以上",
        level: { val: 3, max: 5 },
        memo: "",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // フレームワーク(Frameworks)
  const Frameworks = () => {
    const title = "フレームワーク";
    const header = [
      { label: "タイトル", className: "w-2/6" },
      { label: "実務経験", className: "w-1/6" },
      { label: "セルフスコア", className: "w-1/6" },
      { label: "備考", className: "w-2/6" },
    ];
    const items = [
      {
        name: "Bootstrap(CSS)",
        exp: "3年ほど",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "FastAPI(Python)",
        exp: "4年ほど",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "Flask(Python)",
        exp: "なし",
        level: { val: 2, max: 5 },
        memo: "プライベートで使用",
      },
      {
        name: "Laravel(PHP)",
        exp: "2年ほど",
        level: { val: 2, max: 5 },
        memo: "最終実務使用: 2023年ごろ",
      },
      {
        name: "React(JavaScript)",
        exp: "2年ほど",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "Spring(Java)",
        exp: "1年ほど",
        level: { val: 1, max: 5 },
        memo: "最終実務使用: 2018年ごろ",
      },
      {
        name: "Tailwindcss(CSS)",
        exp: "なし",
        level: { val: 2, max: 5 },
        memo: "プライベートで使用",
      },
      {
        name: "Vue(JavaScript)",
        exp: "3年ほど",
        level: { val: 3, max: 5 },
        memo: "",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // 開発ツール(DevelopmentTools)
  const DevTools = () => {
    const title = "開発ツール";
    const header = [
      { label: "タイトル", className: "w-2/6" },
      { label: "実務経験", className: "w-1/6" },
      { label: "セルフスコア", className: "w-1/6" },
      { label: "備考", className: "w-2/6" },
    ];
    const items = [
      {
        name: "Ansible",
        exp: "1年ほど",
        level: { val: 3, max: 5 },
        memo: "最終実務使用: 2020年ごろ",
      },
      {
        name: "Asciidoc(tor)",
        exp: "なし",
        level: { val: 3, max: 5 },
        memo: "プライベートで使用",
      },
      {
        name: "Claude Code",
        exp: "1年ほど",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "Devin",
        exp: "1年ほど",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "Docker",
        exp: "5年以上",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "Drawio",
        exp: "2年以上",
        level: { val: 3, max: 5 },
        memo: "",
      },
      {
        name: "git",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "github/gitlab",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "Markdown",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
      {
        name: "VSCode",
        exp: "5年以上",
        level: { val: 5, max: 5 },
        memo: "",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // 保有資格(Certifications)
  const Certifications = () => {
    const title = "保有資格";
    const header = [
      { label: "タイトル", className: "w-6/12" },
      { label: "取得年", className: "w-2/12" },
      { label: "備考", className: "w-4/12" },
    ];
    const items = [
      {
        name: "経済産業省 基本情報技術者",
        date: "2008年5月",
        memo: "",
      },
      {
        name: "経済産業省 応用情報技術者",
        date: "2016年6月",
        memo: "",
      },
    ];

    return (
      <>
        <h6>{title}</h6>
        <Table header={header} items={items} />
      </>
    );
  };

  // その他(Miscellaneous)
  const Miscellaneous = () => {
    return (
      <>
        <h6>その他</h6>
        <Markdown>{`
- 主に使用する OS について、開発機は Windows 、サーバ OS は Linux(Ubuntu, CentOS)
- [渡辺幸三](http://dbc.in.coocan.jp/index.html) 氏が提唱する [三要素分析法](http://dbc.in.coocan.jp/methodology.html) による設計
- DFD や UML(クラス図、シーケンス図) などによる見える化を意識した設計
- オブジェクト指向を意識した設計/開発
- ユニットテストの実践
- Slack や Zoom を用いたコミュニケーション`}</Markdown>
      </>
    );
  };

  return (
    <>
      <h2 className="mb-4">スキルセット</h2>
      <WorkExperience />
      <EngineeringDomain />
      <ProgrammingLang />
      <Frameworks />
      <DevTools />
      <Certifications />
      <Miscellaneous />
    </>
  );
};

export default Skills;
