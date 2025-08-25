import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import content from "@/data/content.json";

export default function Footer() {
  const { navLinks, socialLinks, copyright } = content.landingPage.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.url} href={link.url} className={styles.navLink}>
                {link.text}
              </Link>
            ))}
          </nav>
          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {social.platform}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}