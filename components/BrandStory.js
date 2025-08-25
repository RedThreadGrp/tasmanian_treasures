import styles from '@/styles/BrandStory.module.css';

export default function BrandStory({ title, content }) {
  // Split content by newline characters to create paragraphs
  const paragraphs = content.split('\n\n');

  return (
    <section className={styles.brandStory}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {paragraphs.map((p, index) => (
          <p key={index} className={styles.content}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}