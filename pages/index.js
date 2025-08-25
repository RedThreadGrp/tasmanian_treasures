import Head from "next/head";
import ProductCarousel from "@/components/ProductCarousel";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>TasmanianTreasures.com — Secrets from Tasmania’s Hidden Shores</title>
        <meta name="description" content="Hand-collected sea glass and early 1900s pottery from Tasmania—reborn as jewelry, décor, and keepsakes." />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className="container section hero">
        <div className="hero-inner">
          <h1>Secrets from Tasmania’s Hidden Shores</h1>
          <p>Hand‑collected sea glass and early 1900s pottery, shaped by storms, polished by the Southern Ocean, and reborn as timeless art and jewelry.</p>
          <a href="#products" className="btn">Shop the Collection</a>
        </div>
      </section>
    </>
  );
}