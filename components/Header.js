import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import content from "@/data/content.json";

export default function Header() {
  const { brandName, navLinks } = content.landingPage.footer;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          {brandName}
        </Link>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.url} href={link.url} className={styles.navLink}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}