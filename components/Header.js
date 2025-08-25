import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from '@/styles/Header.module.css';
import content from "@/data/content.json";

export default function Header() {
  const { navLinks } = content.landingPage.footer;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Replace the text brand with the logo image */}
        <Link href="/" className={styles.brandLink}>
          <Image 
            src="/logo.svg" 
            alt="Tasmanian Treasures Logo"
            width={200} 
            height={60}
            priority 
          />
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