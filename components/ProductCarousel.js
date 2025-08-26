import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ProductCarousel.module.css';

const ProductCard = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = product.images.length > 1;

  const goToPrevious = (e) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? product.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.preventDefault();
    const isLastSlide = currentIndex === product.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.images[currentIndex]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        {hasMultipleImages && (
          <>
            <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`}>
              &#10094;
            </button>
            <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`}>
              &#10095;
            </button>
          </>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <Link href={product.cta.url} legacyBehavior>
          <a className={styles.ctaLink}>{product.cta.text}</a>
        </Link>
      </div>
    </div>
  );
};

export default function ProductCarousel({ title, products }) {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
