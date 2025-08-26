import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brandName}>Tasmanian Treasures</p>
        <div className={styles.navLinks}>
          <Link href="/products">Shop</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/wholesale">Wholesale</Link>
        </div>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Tasmanian Treasures. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
