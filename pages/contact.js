import Head from "next/head";
import styles from "@/styles/FormPage.module.css";

export default function Contact() {
  // NOTE: This form is for display only. A real implementation would require
  // a backend service or a third-party form handler.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <>
      <Head>
        <title>Contact Us — Tasmanian Treasures</title>
        <meta
          name="description"
          content="Get in touch with Tasmanian Treasures for any questions or inquiries."
        />
      </Head>
      <main className={styles.formPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.description}>
            Have a question about an order or one of our pieces? We'd love to
            hear from you. Fill out the form below or email us directly at{" "}
            <a href="mailto:hello@tasmaniantreasures.com">
              hello@tasmaniantreasures.com
            </a>
            .
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}