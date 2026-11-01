import styles from "./contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const me = {
  email: "ntombizodwantlahla53@gmail.com",
  phone: "+27 63 579 2017",
  github: "https://github.com/ntombizodwantlahla53-code",
  linkedin: "https://www.linkedin.com/in/ntombizodwa-ntlahla-95a173254/",
  location: "Pietermaritzburg, KwaZulu-Natal",
  cv: "/cv.pdf",
};


export const contact = () => {
  const cards = [
    { icon: <FaEnvelope />, name: "Email", value: me.email, link: `mailto:${me.email}` },
    { icon: <FaPhone />, name: "Phone", value: me.phone, link: `tel:${me.phone.replace(/\s/g, "")}` },
    { icon: <FaLinkedin />, name: "LinkedIn", value: "Ntombizodwa Ntlahla", link: me.linkedin },
    { icon: <FaGithub />, name: "GitHub", value: "ntombizodwantlahla53-code", link: me.github },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.top}>
          <p className={styles.label}>SAY HELLO</p>
          <h2 className={styles.title}>Let's build something great together</h2>
          <p className={styles.text}>I'm open to junior developer roles, internships and learning opportunities.</p>
          <p className={styles.place}><FaMapMarkerAlt /> {me.location}</p>
        </div>

        <div className={styles.actions}>
          <a href={`mailto:${me.email}`} className={styles.button}>Send me an email</a>
          <a href={me.cv} download className={styles.ghost}>Download CV</a>
        </div>
      </div>

      <div className={styles.grid}>
        {cards.map((item) => (
          <a key={item.name} href={item.link || undefined} target="_blank" rel="noreferrer" className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.value}>{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default contact;
