import { RiNextjsFill } from "react-icons/ri";
import { Badge } from "../../components/badge/badge";
import styles from "./skills.module.css";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoReact,
  BiLogoAngular,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoFlask,
  BiLogoPhp,
  BiLogoGit,
  BiLogoSpringBoot,
  BiLogoWindows,
  BiLogoDocker,
} from "react-icons/bi";
import {
  SiApacheairflow,
  SiClaude,
  SiGithubcopilot,
  SiJest,
  SiLaravel,
  SiLinux,
  SiMacos,
  SiMysql,
  SiOpenai,
  SiPostgresql,
  SiTestinglibrary,
  SiVitess,
  SiVitest,
  SiWebpack,
} from "react-icons/si";

export function Skills() {
  return (
    <section className={styles.container}>
      <h4>Coding</h4>
      <div className={styles.badges}>
        <Badge variant="success">
          <BiLogoTypescript />
          Typescript
        </Badge>
        <Badge variant="success">
          <BiLogoJavascript />
          JavaScript
        </Badge>
        <Badge variant="success">
          <BiLogoHtml5 />
          HTML
        </Badge>
        <Badge variant="success">
          <BiLogoCss3 />
          CSS
        </Badge>
        <Badge variant="success">
          <BiLogoTailwindCss />
          Tailwind
        </Badge>
        <Badge variant="success">
          <RiNextjsFill />
          Next.JS
        </Badge>
        <Badge variant="success">
          <BiLogoReact />
          React
        </Badge>
        <Badge variant="success">
          <SiTestinglibrary />
          Testing Library
        </Badge>
        <Badge variant="success">
          <SiJest />
          Jest
        </Badge>
        <Badge variant="success">
          <BiLogoAngular />
          Angular
        </Badge>
        <Badge variant="success">
          <BiLogoNodejs />
          Node.JS
        </Badge>
        <Badge variant="success">
          <SiVitess />
          Vite
        </Badge>
        <Badge variant="success">
          <SiVitest />
          Vitest
        </Badge>
        <Badge variant="success">
          <SiWebpack />
          Webpack
        </Badge>
        <Badge variant="success">
          <BiLogoPython />
          Python
        </Badge>
        <Badge variant="success">
          <BiLogoFlask />
          Flask
        </Badge>
        <Badge variant="success">
          <BiLogoJava />
          Java
        </Badge>
        <Badge variant="success">
          <BiLogoSpringBoot />
          Spring Boot
        </Badge>
        <Badge variant="success">
          <BiLogoPhp />
          PHP
        </Badge>
        <Badge variant="success">
          <SiLaravel />
          Laravel
        </Badge>
        <Badge variant="success">
          <SiMysql />
          MySQL
        </Badge>
        <Badge variant="success">
          <SiPostgresql />
          PostgreSQL
        </Badge>
        <Badge variant="success">
          <BiLogoGit />
          Git
        </Badge>
      </div>
      <h4>Technologies</h4>
      <div className={styles.badges}>
        <Badge variant="success">
          <SiMacos />
          macOS
        </Badge>
        <Badge variant="success">
          <SiLinux />
          Linux
        </Badge>
        <Badge variant="success">
          <BiLogoWindows />
          Windows
        </Badge>
        <Badge variant="success">
          <SiGithubcopilot />
          GitHub Copilot
        </Badge>
        <Badge variant="success">
          <SiClaude />
          Claude
        </Badge>
        <Badge variant="success">
          <SiOpenai />
          ChatGPT
        </Badge>
        <Badge variant="success">
          <BiLogoDocker />
          Docker
        </Badge>
        <Badge variant="success">
          <SiApacheairflow />
          Airflow
        </Badge>
      </div>
      <h4>Concepts</h4>
      <div className={styles.badges}>
        <Badge variant="success">State Management</Badge>
        <Badge variant="success">Graphic Design</Badge>
        <Badge variant="success">UI/UX Design</Badge>
        <Badge variant="success">REST APIs</Badge>
        <Badge variant="success">Accessibility</Badge>
        <Badge variant="success">Authentication</Badge>
        <Badge variant="success">Authorization</Badge>
        <Badge variant="success">2FA</Badge>
        <Badge variant="success">Architecture</Badge>
        <Badge variant="success">Agile</Badge>
        <Badge variant="success">AI</Badge>
      </div>
    </section>
  );
}
