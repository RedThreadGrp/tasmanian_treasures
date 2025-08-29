import { useRouter } from 'next/router';
import Head from 'next/head';
import content from '@/data/content.json';
import ProductCarousel from '@/components/ProductCarousel';
import ShopifyBuyButton from '@/components/ShopifyBuyButton'; // Import the new component

export default function ProductCategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  // Find the product data based on the URL slug
  const productData = content.landingPage.productCarousel.products.find(p => p.cta.url.endsWith(category));

  // If the page is loading or the category doesn't exist, show a message
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
          
          {/* Check if a Shopify ID exists before rendering the button */}
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
        
        {/* Reuse the ProductCarousel component to display the image gallery */}
        <ProductCarousel title="Gallery" products={[productData]} />
      </main>
    </>
  );
}
