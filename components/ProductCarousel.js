import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ProductCarousel.module.css';

const ProductCard = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % product.images.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [product.images]);

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
        <div className={styles.carousel}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
