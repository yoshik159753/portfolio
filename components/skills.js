import Markdown from "@/components/markdown";

const DevIcon = ({ dname, filename, size = 15 }) => (
  <div className="flex items-center">
    <img
      src={`/images/icons/${filename}`}
      alt={filename}
      width={size}
      height={size}
    />
    <span className="ml-1">{dname}</span>
  </div>
);

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
                bg-white text-xs md:text-base"
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
  const header = [
    { label: "タイトル", className: "w-2/6" },
    { label: "実務経験", className: "w-1/6" },
    { label: "セルフスコア", className: "w-1/6" },
    { label: "備考", className: "w-2/6" },
  ];

  // キャリア(WorkExperience)
  const workExperience = [
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

  // エンジニアリングドメイン(EngineeringDomain)
  const engineeringDomain = [
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

  // プログラミング言語(ProgrammingLanguages)
  const programmingLang = [
    {
      name: <DevIcon dname="Bash" filename="bash.svg" />,
      exp: "5年以上",
      level: { val: 4, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="C" filename="c.svg" />,
      exp: "5年ほど",
      level: { val: 1, max: 5 },
      memo: "最終実務使用: 2014年ごろ",
    },
    {
      name: <DevIcon dname="C++" filename="cplusplus.svg" />,
      exp: "1年ほど",
      level: { val: 1, max: 5 },
      memo: "最終実務使用: 2015年ごろ",
    },
    {
      name: <DevIcon dname="Java" filename="java.svg" />,
      exp: "3年ほど",
      level: { val: 2, max: 5 },
      memo: "最終実務使用: 2019年ごろ",
    },
    {
      name: <DevIcon dname="JavaScript" filename="javascript.svg" />,
      exp: "5年ほど",
      level: { val: 4, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="PHP" filename="php.svg" />,
      exp: "3年ほど",
      level: { val: 2, max: 5 },
      memo: "最終実務使用: 2023年ごろ",
    },
    {
      name: <DevIcon dname="Python" filename="python.svg" />,
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

  const frameworks = [
    {
      name: <DevIcon dname="Bootstrap" filename="bootstrap.svg" />,
      exp: "3年ほど",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="FastAPI" filename="fastapi.svg" />,
      exp: "4年ほど",
      level: { val: 5, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Flask" filename="flask.svg" />,
      exp: "なし",
      level: { val: 2, max: 5 },
      memo: "プライベートで使用",
    },
    {
      name: <DevIcon dname="Laravel" filename="laravel.svg" />,
      exp: "2年ほど",
      level: { val: 2, max: 5 },
      memo: "最終実務使用: 2023年ごろ",
    },
    {
      name: <DevIcon dname="React" filename="react.svg" />,
      exp: "2年ほど",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Spring" filename="spring.svg" />,
      exp: "1年ほど",
      level: { val: 1, max: 5 },
      memo: "最終実務使用: 2018年ごろ",
    },
    {
      name: <DevIcon dname="Tailwindcss" filename="tailwindcss.svg" />,
      exp: "なし",
      level: { val: 2, max: 5 },
      memo: "プライベートで使用",
    },
    {
      name: <DevIcon dname="Vue" filename="vuejs.svg" />,
      exp: "3年ほど",
      level: { val: 3, max: 5 },
      memo: "",
    },
  ];

  const cloud = [
    {
      name: <DevIcon dname="GCP" filename="googlecloud.svg" />,
      exp: "2年ほど",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="AWS" filename="aws.svg" />,
      exp: "なし",
      level: { val: 2, max: 5 },
      memo: "プライベートで使用",
    },
    {
      name: <DevIcon dname="Vercel" filename="vercel.svg" />,
      exp: "なし",
      level: { val: 2, max: 5 },
      memo: "プライベートで使用",
    },
  ];

  // 開発ツール(DevelopmentTools)
  const devTools = [
    {
      name: <DevIcon dname="Ansible" filename="ansible.svg" />,
      exp: "1年ほど",
      level: { val: 3, max: 5 },
      memo: "最終実務使用: 2020年ごろ",
    },
    {
      name: <DevIcon dname="Asciidoc(tor)" filename="asciidoctor.svg" />,
      exp: "なし",
      level: { val: 3, max: 5 },
      memo: "プライベートで使用",
    },
    {
      name: <DevIcon dname="Claude Code" filename="claude.svg" />,
      exp: "1年以下",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Devin" filename="devin.png" />,
      exp: "1年以下",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Docker" filename="docker.svg" />,
      exp: "5年以上",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Drawio" filename="diagrams.svg" />,
      exp: "2年以上",
      level: { val: 3, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="git" filename="git.svg" />,
      exp: "5年以上",
      level: { val: 5, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="github" filename="github.svg" />,
      exp: "5年以上",
      level: { val: 5, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="Markdown" filename="markdown.svg" />,
      exp: "5年以上",
      level: { val: 5, max: 5 },
      memo: "",
    },
    {
      name: <DevIcon dname="VSCode" filename="vscode.svg" />,
      exp: "5年以上",
      level: { val: 5, max: 5 },
      memo: "",
    },
  ];

  // 保有資格(Certifications)
  const headerCertifications = [
    { label: "タイトル", className: "w-6/12" },
    { label: "取得年", className: "w-2/12" },
    { label: "備考", className: "w-4/12" },
  ];
  const certifications = [
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
      <h2>スキルセット</h2>
      <div>
        <h6>キャリア</h6>
        <Table header={header} items={workExperience} />
      </div>
      <div className="mt-6">
        <h6>エンジニアリングドメイン</h6>
        <Table header={header} items={engineeringDomain} />
      </div>
      <div className="mt-6">
        <h6>プログラミング言語</h6>
        <Table header={header} items={programmingLang} />
      </div>
      <div className="mt-6">
        <h6>フレームワーク</h6>
        <Table header={header} items={frameworks} />
      </div>
      <div className="mt-6">
        <h6>クラウド</h6>
        <Table header={header} items={cloud} />
      </div>
      <div className="mt-6">
        <h6>開発ツール</h6>
        <Table header={header} items={devTools} />
      </div>
      <div className="mt-6">
        <h6>保有資格</h6>
        <Table header={headerCertifications} items={certifications} />
      </div>
      <div className="mt-6">
        <h6>その他</h6>
        <Markdown>{`
- 主に使用する OS について、開発機は Windows 、サーバ OS は Linux(Ubuntu, CentOS)
- [渡辺幸三](http://dbc.in.coocan.jp/index.html) 氏が提唱する [三要素分析法](http://dbc.in.coocan.jp/methodology.html) による設計
- DFD や UML(クラス図、シーケンス図) などによる見える化を意識した設計
- オブジェクト指向を意識した設計/開発
- ユニットテストの実践
- Slack や Zoom を用いたコミュニケーション`}</Markdown>
      </div>
    </>
  );
};

export default Skills;
