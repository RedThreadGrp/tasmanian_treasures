export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  const { name, email, message } = req.body || {};
  if (!name || !email) return res.status(400).json({ error: "Name and email required." });
  console.log("[ORDER INTAKE]", new Date().toISOString(), req.body);
  return res.status(200).json({ ok: true });
}