import styles from "./journey.module.css";
import { FaCloud, FaGlobe } from "react-icons/fa";

const journey = [
  {
    date: "May 2026 - June 2026",
    title: "CodeTribe Bootcamp Participant",
    place: "mLab",
    points: [
      "Built responsive web apps with HTML, CSS, JavaScript, React and TypeScript",
      "Used semantic HTML, Flexbox, Grid, DOM manipulation and form validation",
      "Used Git and GitHub, and deployed with GitHub Pages and Vercel",
      "Joined remote stand-ups, Q&A sessions and code reviews",
    ],
  },
  {
    date: "Jan 2022 - Dec 2024",
    title: "Diploma in ICT in Business Analysis",
    place: "Durban University of Technology",
    points: [],
  },
  {
    date: "2021",
    title: "National Senior Certificate (Grade 12)",
    place: "Gobinamba Senior Secondary School",
    points: [],
  },
];

const certs = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Microsoft Certified: Azure Developer Associate (AZ-204)",
];

const languages = ["English", "Xhosa", "Zulu"];


export const journeys = () => {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.top}>
        <p className={styles.label}>HOW I GOT HERE</p>
        <h2 className={styles.title}>My journey</h2>
      </div>

      <div className={styles.wrap}>
        <div className={styles.line}>
          {journey.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.dot}></div>
              <p className={styles.date}>{item.date}</p>
              <h3 className={styles.name}>{item.title}</h3>
              <p className={styles.place}>{item.place}</p>
              <ul className={styles.points}>
                {item.points.map((point) => (
                  <li key={point} className={styles.point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.side}>
          <div className={styles.box}>
            <h3 className={styles.boxtitle}><FaCloud /> Certifications</h3>
            {certs.map((cert) => (
              <p key={cert} className={styles.cert}>{cert}</p>
            ))}
          </div>

          <div className={styles.box}>
            <h3 className={styles.boxtitle}><FaGlobe /> Languages</h3>
            <div className={styles.chips}>
              {languages.map((language) => (
                <span key={language} className={styles.chip}>{language}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default journeys;
