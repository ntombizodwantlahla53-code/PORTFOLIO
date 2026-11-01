import styles from "./projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const gh = "https://github.com/ntombizodwantlahla53-code";

const projects = [
  {
    title: "HotelApp",
    text: "A hotel booking web application where customers browse hotels, book rooms and pay online.",
    points: [
      "Admins manage hotels, rooms, bookings and payments",
      "Secure login with Google Sign-In and Admin / Customer roles",
      "Cloud database and the app is deployed online",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Vercel"],
    github: gh + "/HotelApp",
    live: " https://hotel-app-m1wm.vercel.app",
    featured: true,
  },
  {
    title: "Shopping List",
    text: "Add and manage your shopping items. Forms with validation, responsive design and Redux Toolkit state management.",
    tags: ["React", "TypeScript", "Redux Toolkit"],
    github: gh + "/Shopping-List",
  },
  {
    title: "Weather",
    text: "A weather app that uses API integration, with a clean and responsive design.",
    tags: ["React", "TypeScript", "API"],
    github: gh + "/Weather",
    live: " https://weather-tqyi.vercel.app/",
  },
  {
    title: "Weather with Notes",
    text: "My weather app extended with notes, built with React and TypeScript.",
    tags: ["React", "TypeScript", "API"],
    github: gh + "/Weather-withNotes",
  },
  {
    title: "Shopping List 2",
    text: "A second version of my shopping list app, built with React and TypeScript.",
    tags: ["React", "TypeScript"],
    github: gh + "/Shoppinglist2",
  },
  {
    title: "MyTask",
    text: "A task app built with TypeScript to practise state management.",
    tags: ["React", "TypeScript"],
    github: gh + "https://my-task2-phi.vercel.app/",
  },
  {
    title: "LibraryDB",
    text: "A library database project that shows my SQL and database design skills.",
    tags: ["SQL", "Database"],
    github: gh + "/LibraryDB",
  },
];


const rooms = ["Sea view", "Deluxe", "Suite"];

export const project = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.top}>
        <p className={styles.label}>THINGS I MADE</p>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.text}>A few apps I built while learning and growing.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((item) => (
          <div key={item.title} className={item.featured ? styles.featured : styles.card}>
            <div className={styles.info}>
              {item.featured && <p className={styles.badge}>★ Featured project</p>}
              <h3 className={styles.name}>{item.title}</h3>
              <p className={styles.desc}>{item.text}</p>

              {item.points && (
                <ul className={styles.points}>
                  {item.points.map((point) => (
                    <li key={point} className={styles.point}>{point}</li>
                  ))}
                </ul>
              )}

              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href={item.github} target="_blank" rel="noreferrer" className={styles.button}>
                  <FaGithub /> Code
                </a>
                {item.live && (
                  <a href={item.live} target="_blank" rel="noreferrer" className={styles.ghost}>
                    <FaExternalLinkAlt /> Live demo
                  </a>
                )}
              </div>
            </div>

            {item.featured && (
              <div className={styles.mock}>
                <div className={styles.window}>
                  <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                  <div className={styles.screen}>
                    <p className={styles.brand}>♡ BookHotel</p>
                    <p className={styles.search}>Search hotels, cities, dates...</p>
                    <div className={styles.rooms}>
                      {rooms.map((room) => (
                        <div key={room} className={styles.room}>
                          <div className={styles.pic}></div>
                          <p className={styles.price}>{room}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default project;
