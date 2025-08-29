import Image from 'next/image';
import styles from '@/styles/ProductGallery.module.css';

export default function ProductGallery({ images, title }) {
  return (
    <div className={styles.gallerySection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={src}
              alt={`${title} - Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
