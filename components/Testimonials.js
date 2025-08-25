import styles from '@/styles/Testimonials.module.css';

export default function Testimonials({ title, reviews }) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <blockquote key={index} className={styles.reviewCard}>
              <p className={styles.quote}>"{review.quote}"</p>
              <footer className={styles.author}>— {review.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}