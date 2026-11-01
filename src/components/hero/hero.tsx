import styles from "./hero.module.css";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const me = {
  name: "Ntombizodwa Ntlahla",
  initials: "NN",
  photo: "/myself.jpg",
  intro:
    "I build friendly, responsive web apps with React, TypeScript, Node.js and PostgreSQL. A business analysis graduate who loves turning real problems into simple, useful software.",
  email: "ntombizodwantlahla53@gmail.com",
  github: "https://github.com/ntombizodwantlahla53-code",
  linkedin: "https://www.linkedin.com/in/ntombizodwa-ntlahla-95a173254/",
  cv: "/public/cv.pdf",
};

const roles = [
  "Junior Full Stack Developer",
  "React & TypeScript Developer",
  "Business Analysis Graduate",
  "Problem Solver",
];


const tech = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express", "PostgreSQL", "SQL", "REST APIs",
  "HTML5", "CSS3", "Git", "GitHub", "Vercel", "Postman", "Figma", "Azure",
];


const go = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const useTyping = (words: string[]) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index];
    const done = !erasing && text === word;
    const timer = setTimeout(() => {
      if (done) setErasing(true);
      else if (erasing && text === "") {
        setErasing(false);
        setIndex((index + 1) % words.length);
      } else setText(word.slice(0, text.length + (erasing ? -1 : 1)));
    }, done ? 1500 : erasing ? 40 : 80);
    return () => clearTimeout(timer);
  }, [text, erasing, index, words]);

  return text;
};

export const hero = () => {
  const typed = useTyping(roles);
  const [first, ...rest] = me.name.split(" ");

  return (
    <>
      <section id="top" className={styles.hero}>
        <div className={styles.blob}></div>
        <div className={styles.bubble}></div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.pulse}></span>
            Open to junior roles and internships
          </p>
          <h1 className={styles.name}>
            {first} <span className={styles.shine}>{rest.join(" ")}</span>
          </h1>
          <h2 className={styles.role}>
            {typed}
            <span className={styles.cursor}></span>
          </h2>
          <p className={styles.intro}>{me.intro}</p>

          <div className={styles.buttons}>
            <button className={styles.primary} onClick={() => go("projects")}>View my work</button>
            <a href={me.cv} download className={styles.ghost}>Download CV</a>
          </div>

          <div className={styles.socials}>
            <a href={me.github} target="_blank" rel="noreferrer" className={styles.social}><FaGithub /></a>
            <a href={me.linkedin} target="_blank" rel="noreferrer" className={styles.social}><FaLinkedin /></a>
            <a href={`mailto:${me.email}`} className={styles.social}><FaEnvelope /></a>
          </div>
        </div>

        <div className={styles.avatar}>
          <div className={styles.ring}></div>
          <div className={styles.circle}>
            {me.photo ? <img src={me.photo} alt={me.name} className={styles.photo} /> : me.initials}
          </div>
          <span className={styles.react}>React</span>
          <span className={styles.script}>TypeScript</span>
          <span className={styles.server}>Node.js</span>
        </div>
      </section>

      <div className={styles.strip}>
        <div className={styles.track}>
          {[...tech, ...tech].map((item, index) => (
            <span key={index} className={styles.tech}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default hero;
