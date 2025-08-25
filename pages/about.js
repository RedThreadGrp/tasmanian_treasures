import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Our Story — Tasmanian Treasures</title>
        <meta
          name="description"
          content="Learn about our process of collecting and crafting treasures from the shores of Tasmania."
        />
      </Head>
      <main className={styles.aboutPage}>
        <section className={styles.hero}>
          <h1>From Shipwreck to Shoreline</h1>
          <p className={styles.subtitle}>
            Every piece from Tasmanian Treasures begins its journey in the
            tempestuous Southern Ocean.
          </p>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>Our Philosophy</h2>
            <p>
              We believe in beauty forged by nature and history. We don’t alter
              the shape or color of the materials we find; we simply give them
              a new purpose. Our work is a partnership with the ocean,
              preserving its wild artistry for you to cherish. It's a commitment
              to sustainability, giving discarded materials a second life as
              beautiful, lasting treasures.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="https://images.unsplash.com/photo-1549231481-223fca804b4c?q=80&w=2070&auto=format&fit=crop"
              alt="Wild Tasmanian coastline"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </section>

        <section className={`${styles.contentSection} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Our Process</h2>
            <p>
              Our process is guided by the tides and the seasons. After every
              storm, we walk the remote shores of Tasmania, searching for the
              smoothest, most character-filled pieces of sea glass and pottery.
              Each fragment is carefully cleaned by hand and thoughtfully
              categorized. The finest pieces are then set in sterling silver or
              framed, a meticulous process that honors the material's unique
              form and history.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="https://images.unsplash.com/photo-1585829365232-a3da63879f9c?q=80&w=2070&auto=format&fit=crop"
              alt="A collection of found sea glass"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </section>
      </main>
    </>
  );
}