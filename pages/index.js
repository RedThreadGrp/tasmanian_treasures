import Head from "next/head";
import content from "@/data/content.json";

// Import all the section components
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import BrandStory from "@/components/BrandStory";
import ValuePropositions from "@/components/ValuePropositions";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  const { 
    hero,
    productCarousel,
    brandStory,
    valuePropositions,
    testimonials,
    finalCta 
  } = content.landingPage;

  return (
    <>
      <Head>
        <title>Tasmanian Treasures — Art Forged by the Southern Ocean</title>
        <meta name="description" content={hero.tagline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero 
          title={hero.title} 
          tagline={hero.tagline} 
          cta={hero.cta} 
        />
        <ProductCarousel 
          title={productCarousel.title} 
          products={productCarousel.products} 
        />
        <BrandStory 
          title={brandStory.title} 
          content={brandStory.content}
        />
        <ValuePropositions 
          items={valuePropositions}
        />
        <Testimonials
          title={testimonials.title}
          reviews={testimonials.reviews}
        />
        <FinalCta
          title={finalCta.title}
          content={finalCta.content}
          cta={finalCta.cta}
        />
      </main>
    </>
  );
}