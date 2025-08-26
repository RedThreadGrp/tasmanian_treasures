import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

export default function Hero({ title, tagline, cta, backgroundImage }) {
  return (
    <section 
      className={styles.hero} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <Link href={cta.url} legacyBehavior>
          <a className={styles.ctaButton}>{cta.text}</a>
        </Link>
      </div>
    </section>
  );
}
