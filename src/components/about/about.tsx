import styles from "./about.module.css";
import { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const me = {
  about:
    "I'm a detail-oriented graduate with a Diploma in ICT in Business Analysis and a growing passion for full stack development. At the CodeTribe bootcamp at mLab I built responsive web apps with React and TypeScript, used Git and GitHub every day, and joined remote stand-ups and code reviews. I enjoy solving business problems with technology, learning fast, and working both on my own and in a team. I'm looking for an opportunity to gain industry experience and grow with a professional team.",
  location: "South Africa",
};

const stats = [
  { number: 3, caption: "Azure certifications" },
  { number: 7, caption: "Projects built" },
  { number: 3, caption: "Languages spoken" },
];


const Counter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [seen, setSeen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const watcher = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        watcher.disconnect();
      }
    });
    if (ref.current) watcher.observe(ref.current);
    return () => watcher.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const timer = setInterval(() => {
      setCount((now) => (now < to ? now + 1 : now));
    }, 300);
    return () => clearInterval(timer);
  }, [seen, to]);

  return <p ref={ref} className={styles.number}>{count}</p>;
};

export const about = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.top}>
        <p className={styles.label}>A LITTLE ABOUT ME</p>
        <h2 className={styles.title}>Nice to meet you</h2>
      </div>

      <div className={styles.wrap}>
        <div className={styles.story}>
          <p className={styles.text}>{me.about}</p>
          <p className={styles.place}><FaMapMarkerAlt /> {me.location}</p>
        </div>

        <div className={styles.stats}>
          {stats.map((item) => (
            <div key={item.caption} className={styles.stat}>
              <Counter to={item.number} />
              <p className={styles.caption}>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default about;
