import styles from "./App.module.css";
import { navbar as Navbar } from "./components/navbar/navbar";
import { hero as Hero } from "./components/hero/hero";
import { reveal as Reveal } from "./components/reveal/reveal";
import { about as About } from "./components/about/about";
import { skill as Skill } from "./components/skills/skills";
import { project as Project } from "./components/projects/projects";
import { journeys as Journey } from "./components/journey/journey";
import { contact as Contact } from "./components/contact/contact";
import { footer as Footer } from "./components/footer/footer";

function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skill /></Reveal>
      <Reveal><Project /></Reveal>
      <Reveal><Journey /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  );
}

export default App;
