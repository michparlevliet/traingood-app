import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href="/home">Home</Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">About</Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
