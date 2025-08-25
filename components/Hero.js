import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

export default function Hero({ title, tagline, cta }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <Link href={cta.url} className={styles.ctaButton}>
          {cta.text}
        </Link>
      </div>
    </section>
  );
}