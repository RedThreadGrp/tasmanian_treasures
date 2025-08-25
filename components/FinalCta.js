import Link from 'next/link';
import styles from '@/styles/FinalCta.module.css';

export default function FinalCta({ title, content, cta }) {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <Link href={cta.url} className={styles.ctaButton}>
        {cta.text}
      </Link>
    </section>
  );
}