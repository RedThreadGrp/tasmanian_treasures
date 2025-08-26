import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <Image 
              src="https://raw.githubusercontent.com/RedThreadGrp/tasmanian_treasures/main/public/logo.jpg" 
              alt="Tasmanian Treasures Logo" 
              width={180} 
              height={48}
              priority
            />
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#products">Collections</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products" legacyBehavior>
            <a className={styles.ctaButton}>Shop All</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
