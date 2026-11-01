import styles from "./skills.module.css";
import { FaHeart, FaChartLine, FaCode, FaDatabase, FaTools, FaLayerGroup, FaCloud } from "react-icons/fa";

const skills = [
  { icon: FaChartLine, title: "Business", items: ["Business Analysis", "System Analysis", "SDLC"] },
  { icon: FaCode, title: "Web", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Express", "REST APIs"] },
  { icon: FaDatabase, title: "Database", items: ["PostgreSQL", "SQL", "pgAdmin", "Neon"] },
  { icon: FaTools, title: "Tools", items: ["Git", "GitHub", "Vercel", "Postman", "Figma", "Microsoft Office"] },
  { icon: FaLayerGroup, title: "Concepts", items: ["Responsive Design", "API Integration", "State Management", "Protected Routes"] },
  { icon: FaCloud, title: "Cloud", items: ["Azure Fundamentals", "Azure Administrator", "Azure Developer"] },
];

const soft = [
  "Communication", "Problem-Solving", "Initiative", "Teamwork", "Attention to Detail",
  "Time Management", "Analytical Thinking", "Adaptability", "Willingness to Learn",
];


export const skill = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.top}>
        <p className={styles.label}>WHAT I USE</p>
        <h2 className={styles.title}>My skills</h2>
        <p className={styles.text}>Tools and ideas I use to build things.</p>
      </div>

      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.title} className={styles.card}>
            <p className={styles.icon}><group.icon /></p>
            <h3 className={styles.name}>{group.title}</h3>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>{item}</span>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.wide}>
          <p className={styles.icon}><FaHeart /></p>
          <h3 className={styles.name}>Soft skills</h3>
          <div className={styles.chips}>
            {soft.map((item) => (
              <span key={item} className={styles.pink}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default skill;
