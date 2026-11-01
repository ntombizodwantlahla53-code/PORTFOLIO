import styles from "./footer.module.css";

const me = { name: "Ntombizodwa Ntlahla" };


export const footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>Designed and built by {me.name} ♡</p>
    </div>
  );
};

export default footer;
