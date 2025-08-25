import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import styles from "@/styles/Shop.module.css";

export default function AllCollections() {
  const { productCarousel } = content.landingPage;

  return (
    <>
      <Head>
        <title>Shop All Collections — Tasmanian Treasures</title>
        <meta
          name="description"
          content="Explore our full collection of handcrafted sea glass jewelry, framed pottery, coasters, and magnets."
        />
      </Head>
      <main className={styles.shopPage}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Full Collection</h1>
          <p className={styles.subtitle}>
            Each piece is a unique story, shaped by the Southern Ocean and
            waiting to be cherished.
          </p>
        </div>
        <div className={styles.grid}>
          {productCarousel.products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className={styles.productImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <Link href={product.cta.url} className={styles.ctaLink}>
                  {product.cta.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}