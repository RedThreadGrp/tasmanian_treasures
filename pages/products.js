import Head from 'next/head';
import content from '@/data/content.json';
import ProductCarousel from '@/components/ProductCarousel';

export default function AllProductsPage() {
  const { productCarousel } = content.landingPage;

  return (
    <>
      <Head>
        <title>All Collections — Tasmanian Treasures</title>
        <meta name="description" content="Browse all handcrafted collections from Tasmanian Treasures." />
      </Head>
      <main>
        <div style={{ padding: '4rem 1rem' }}>
          <h1 style={{ 
            fontFamily: "'Lora', serif", 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            color: '#134e4a',
            marginBottom: '1rem'
          }}>
            All Collections
          </h1>
          <p style={{ 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto 3rem auto',
            color: '#4b5563'
          }}>
            Explore our full range of handcrafted treasures, from elegant jewelry to unique home decor, each with a story forged by the Southern Ocean.
          </p>
          
          {/* We can reuse the existing ProductCarousel component to display all products */}
          <ProductCarousel products={productCarousel.products} />
        </div>
      </main>
    </>
  );
}
