import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import styles from "./reveal.module.css";

export const reveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const watcher = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        watcher.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) watcher.observe(ref.current);
    return () => watcher.disconnect();
  }, []);

  return (
    <div ref={ref} className={seen ? styles.shown : styles.hidden}>
      {children}
    </div>
  );
};

export default reveal;
