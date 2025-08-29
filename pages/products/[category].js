import Head from 'next/head';
import content from '@/data/content.json';
import ShopifyBuyButton from '@/components/ShopifyBuyButton';
import ProductGallery from '@/components/ProductGallery';

// This function tells Next.js which pages to build
export async function getStaticPaths() {
  const paths = content.landingPage.productCarousel.products.map(product => ({
    params: { category: product.id }, // Use the 'id' field for the URL slug
  }));

  return { paths, fallback: false }; // fallback: false means any path not returned will 404
}

// This function gets the data for each individual page
export async function getStaticProps({ params }) {
  const productData = content.landingPage.productCarousel.products.find(
    p => p.id === params.category
  );

  return {
    props: {
      product: productData,
    },
  };
}

// The page component now receives the data as props
export default function ProductCategoryPage({ product }) {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} — Tasmanian Treasures</title>
        <meta name="description" content={product.description} />
      </Head>
      <main>
        <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1>{product.name}</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{product.description}</p>
          
          {product.shopifyProductId ? (
            <div style={{ marginTop: '2rem', maxWidth: '400px', margin: 'auto' }}>
              <ShopifyBuyButton productId={product.shopifyProductId} />
            </div>
          ) : (
            <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#666' }}>
              This product is not yet available for online purchase.
            </p>
          )}
        </div>
        
        <ProductGallery images={product.images} title="Gallery" />
      </main>
    </>
  );
}
