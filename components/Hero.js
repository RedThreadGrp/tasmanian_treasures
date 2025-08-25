export default function Hero({title,tagline,cta}) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <a href={cta.url}>{cta.text}</a>
    </section>
  );
}