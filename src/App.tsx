import styles from "./App.module.css";
import { Name } from "./components/name/name";
import { Title } from "./components/title/title";
import { About } from "./sections/about/about";
import { Experience } from "./sections/experience/experience";
import { NavBar } from "./sections/navbar/navbar";
import { Skills } from "./sections/skills/skills";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <Name />
          <Title />
        </section>
        <section className={styles.section} id="about">
          <h1 className={styles.title}>About</h1>
          <About />
        </section>
        <section className={styles.section} id="skills">
          <h1 className={styles.title}>Skills</h1>
          <Skills />
        </section>
        <section className={styles.section} id="experience">
          <h1 className={styles.title}>Experience</h1>
          <Experience />
        </section>
      </main>
    </>
  );
}
