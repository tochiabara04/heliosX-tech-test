import styles from '../../styles/footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <p>Column 1</p>
    </div>
    <div className={styles.column}>
      <p>Column 2</p>
    </div>
  </footer>
);

export default Footer;
