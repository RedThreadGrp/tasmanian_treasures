import { useState } from "react";
export default function ProductCarousel({ products = [] }) {
  const [i, setI] = useState(0);
  if (!products.length) return null;
  const p = products[i];
  return (
    <div>
      <h3>{p.title}</h3>
      <p>{p.blurb}</p>
    </div>
  );
}