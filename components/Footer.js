import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'

const Footer = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} href="/login">Login</Link>
        </li>
        <li>
          <Link className={styles.link} href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
