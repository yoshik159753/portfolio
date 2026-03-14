const SkillSummary = () => {
  const DevIcon = ({ href, filename, size = 40 }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={`/images/icons/${filename}`}
        alt={filename}
        width={size}
        height={size}
      />
    </a>
  );

  const skillSummary = {
    programmingLang: {
      title: "プログラミング言語",
      icons: {
        python: { link: "https://www.python.org", filename: "python.svg" },
        php: { link: "https://www.php.net", filename: "php.svg" },
        javascript: {
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          filename: "javascript.svg",
        },
        java: { link: "https://www.java.com", filename: "java.svg" },
        c: { link: "https://www.cprogramming.com/", filename: "c.svg" },
        bash: {
          link: "https://www.gnu.org/software/bash/",
          filename: "bash.svg",
        },
      },
    },
    frameworks: {
      title: "ライブラリやフレームワーク",
      icons: {
        fastapi: {
          link: "https://fastapi.tiangolo.com/",
          filename: "fastapi.svg",
        },
        flask: {
          link: "https://flask.palletsprojects.com/",
          filename: "flask.svg",
        },
        laravel: { link: "https://laravel.com/", filename: "laravel.svg" },
        spring: { link: "https://spring.io/", filename: "spring.svg" },
        react: { link: "https://reactjs.org/", filename: "react.svg" },
        nextjs: { link: "https://nextjs.org/", filename: "nextjs.svg" },
        vuejs: { link: "https://vuejs.org/", filename: "vuejs.svg" },
        jquery: { link: "https://jquery.com/", filename: "jquery.svg" },
        bootstrap: {
          link: "https://getbootstrap.com",
          filename: "bootstrap.svg",
        },
        tailwindcss: {
          link: "https://tailwindcss.com/",
          filename: "tailwindcss.svg",
        },
      },
    },
    middleware: {
      title: "ミドルウェア",
      icons: {
        postgresql: {
          link: "https://www.postgresql.org",
          filename: "postgresql.svg",
        },
        mysql: { link: "https://www.mysql.com/", filename: "mysql.svg" },
        mongodb: { link: "https://www.mongodb.com/", filename: "mongodb.svg" },
        nginx: { link: "https://www.nginx.com", filename: "nginx.svg" },
      },
    },
    cloud: {
      title: "クラウド",
      icons: {
        googlecloud: {
          link: "https://cloud.google.com/",
          filename: "googlecloud.svg",
        },
        aws: { link: "https://aws.amazon.com", filename: "aws.svg" },
        vercel: { link: "https://vercel.com/", filename: "vercel.svg" },
      },
    },
    devTools: {
      title: "ツール",
      icons: {
        git: { link: "https://git-scm.com/", filename: "git.svg" },
        github: { link: "https://github.com/", filename: "github.svg" },
        gitlab: { link: "https://about.gitlab.com/", filename: "gitlab.svg" },
        docker: { link: "https://www.docker.com/", filename: "docker.svg" },
        vagrant: {
          link: "https://www.vagrantup.com/",
          filename: "vagrant.svg",
        },
        ansible: { link: "https://www.ansible.com/", filename: "ansible.svg" },
        vscode: {
          link: "https://code.visualstudio.com/",
          filename: "vscode.svg",
        },
        diagrams: {
          link: "https://www.drawio.com/about",
          filename: "diagrams.svg",
        },
        markdown: {
          link: "https://en.wikipedia.org/wiki/Markdown",
          filename: "markdown.svg",
        },
        asciidoctor: {
          link: "https://asciidoctor.org/",
          filename: "asciidoctor.svg",
        },
        claude: { link: "https://code.claude.com/", filename: "claude.svg" },
      },
    },
    others: {
      title: "その他",
      icons: {
        linux: { link: "https://www.linux.org/", filename: "linux.svg" },
        ubuntu: { link: "https://ubuntu.com/", filename: "ubuntu.svg" },
        apple: { link: "https://www.apple.com/", filename: "apple.svg" },
        windows: {
          link: "https://www.microsoft.com/",
          filename: "windows.svg",
        },
      },
    },
  };

  return (
    <>
      <h2>スキルサマリ</h2>
      <div className="flex flex-col gap-4">
        {Object.entries(skillSummary).map(([key, { title, icons }]) => (
          <div key={key}>
            <h6>{title}</h6>
            <div className="flex flex-wrap gap-1">
              {Object.entries(icons).map(([key, { link, filename }]) => (
                <DevIcon href={link} filename={filename} key={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillSummary;
