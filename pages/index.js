import Head from "next/head";
import content from "@/data/content.json";
import Hero from "@/components/Hero";

export default function Home() {
  const lp = content.landingPage;
  return (
    <>
      <Head>
        <title>Tasmanian Treasures — Art Forged by the Southern Ocean</title>
      </Head>
      <Hero title={lp.hero.title} tagline={lp.hero.tagline} cta={lp.hero.cta} />
    </>
  );
}