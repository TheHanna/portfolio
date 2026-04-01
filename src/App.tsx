import "animate.css";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import styles from "./App.module.css";
import { About } from "./sections/about/about";
import { Experience } from "./sections/experience/experience";
import { NavBar } from "./sections/navbar/navbar";
import { Skills } from "./sections/skills/skills";
import { Home } from "./sections/home/home";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <Home />
          <a href="#about" className={styles.downArrow}>
            <BiSolidDownArrowCircle className="animate__animated animate__bounce animate__infinite" />
          </a>
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
