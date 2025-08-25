import { useState } from "react";
export default function OrderForm() {
  const [state, setState] = useState({ name: "", email: "" });
  return (
    <form>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button>Submit</button>
    </form>
  );
}