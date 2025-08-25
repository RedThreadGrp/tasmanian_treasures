import Head from "next/head";
import styles from "@/styles/FormPage.module.css"; // Reusing the same form styles

export default function Wholesale() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your wholesale inquiry! We will be in touch shortly.");
  };

  return (
    <>
      <Head>
        <title>Wholesale Inquiries — Tasmanian Treasures</title>
        <meta
          name="description"
          content="Partner with us to stock our unique, handcrafted Tasmanian art in your store."
        />
      </Head>
      <main className={styles.formPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Partner With Us</h1>
          <p className={styles.description}>
            Bring the story of the Southern Ocean to your customers. Our
            handcrafted treasures are perfect for gift shops, boutiques, and
            galleries that value unique, story-driven products. Please fill out
            the form below to apply for a wholesale account.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="businessName">Business Name</label>
              <input type="text" id="businessName" name="businessName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="website">Website or Social Media</label>
              <input type="url" id="website" name="website" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Contact Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Tell us about your store</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </main>
    </>
  );
}