import { useRouter } from 'next/router';
import Head from 'next/head';
import content from '@/data/content.json';
import ProductCarousel from '@/components/ProductCarousel'; // We can reuse this!

export default function ProductCategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const productData = content.landingPage.productCarousel.products.find(p => p.cta.url.endsWith(category));

  if (!productData) {
    return <p>Category not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{productData.name} — Tasmanian Treasures</title>
        <meta name="description" content={productData.description} />
      </Head>
      <main>
        {/* Here you would embed your Shopify Buy Button script */}
        {/* For now, we'll just display the product info */}
        <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1>{productData.name}</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{productData.description}</p>
          <div style={{ marginTop: '2rem', border: '2px dashed #ccc', padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
            Shopify Buy Button for "{productData.name}" would be embedded here.
          </div>
        </div>
        
        {/* We can reuse the ProductCarousel to display the images */}
        <ProductCarousel title="Gallery" products={[productData]} />

      </main>
    </>
  );
}
