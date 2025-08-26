import Image from 'next/image';
import styles from '@/styles/BrandStory.module.css';

export default function BrandStory({ title, content, image }) {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="Collecting sea glass on a Tasmanian beach"
            width={500}
            height={400}
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </section>
  );
}
