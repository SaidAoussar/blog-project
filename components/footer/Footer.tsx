import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr />
        <div className={styles.wrapText}>
          <p className={styles.copyright}>Copyright © 2017 Your Website Name</p>
          <p className={styles.createBy}>Mediumish Theme by WowThemes.net</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
