import { useRouter } from 'next/router';
import Head from 'next/head';
import content from '@/data/content.json';
import ShopifyBuyButton from '@/components/ShopifyBuyButton';
import ProductGallery from '@/components/ProductGallery'; // Import the new gallery component

export default function ProductCategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const productData = content.landingPage.productCarousel.products.find(p => p.cta.url.endsWith(category));

  if (!productData) {
    return <p>Loading product...</p>;
  }

  return (
    <>
      <Head>
        <title>{productData.name} — Tasmanian Treasures</title>
        <meta name="description" content={productData.description} />
      </Head>
      <main>
        <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1>{productData.name}</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{productData.description}</p>
          
          {productData.shopifyProductId ? (
            <div style={{ marginTop: '2rem', maxWidth: '400px', margin: 'auto' }}>
              <ShopifyBuyButton productId={productData.shopifyProductId} />
            </div>
          ) : (
            <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#666' }}>
              This product is not yet available for online purchase.
            </p>
          )}
        </div>
        
        {/* Use the new ProductGallery component instead of the old carousel */}
        <ProductGallery images={productData.images} title="Gallery" />
      </main>
    </>
  );
}
