import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ProductCarousel.module.css';

export default function ProductCarousel({ title, products }) {
  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <Link href={product.cta.url} className={styles.ctaLink}>
              {product.cta.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}