import styles from "./navbar.module.css";

const links = ["about", "skills", "projects", "journey", "contact"];

const go = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const navbar = () => {
  return (
    <nav className={styles.bar}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={(e) => { e.preventDefault(); go("top"); }}>
          <span className={styles.heart}>♡</span>
          <span className={styles.first}>Ntombizodwa</span>
          <span className={styles.last}>.dev</span>
        </a>

        <div className={styles.links}>
          {links.map((id) => (
            <a key={id} href={`#${id}`} className={styles.link} onClick={(e) => { e.preventDefault(); go(id); }}>
              {id}
            </a>
          ))}
        </div>

        <a href="#contact" className={styles.hire} onClick={(e) => { e.preventDefault(); go("contact"); }}>
          Hire me
        </a>
      </div>
    </nav>
  );
};

export default navbar;
