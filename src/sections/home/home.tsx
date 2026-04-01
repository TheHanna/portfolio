import { Name } from "../../components/name/name";
import { Title } from "../../components/title/title";
import styles from "./home.module.css";
import { Badge } from "../../components/badge/badge";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";

export function Home() {
  return (
    <>
      <Name />
      <Title />
      <div className={styles.links}>
        <Badge variant="link">
          <BiEnvelope />
          <a href="mailto:brian@randomhanna.com" className={styles.link}>
            Email
          </a>
        </Badge>
        <Badge variant="link">
          <BiLogoLinkedin />
          <a
            href="https://www.linkedin.com/in/thehanna"
            target="_blank"
            className={styles.link}
          >
            LinkedIn
          </a>
        </Badge>
      </div>
    </>
  );
}
