import Head from "next/head";
import content from "@/data/content.json";

// Import all the section components
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import BrandStory from "@/components/BrandStory";

export default function Home() {
  const { 
    hero,
    productCarousel,
    brandStory,
  } = content.landingPage;a

  return (
    <>
      <Head>
        <title>Tasmanian Treasures: Art Forged by the Southern Ocean</title>
        <meta name="description" content={hero.tagline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero 
          title={hero.title} 
          tagline={hero.tagline} 
          cta={hero.cta}
          backgroundImage={hero.backgroundImage}
        />
        <ProductCarousel 
          title={productCarousel.title} 
          products={productCarousel.products} 
        />
        <BrandStory 
          title={brandStory.title} 
          content={brandStory.content}
          image={brandStory.image}
        />
      </main>
    </>
  );
}
