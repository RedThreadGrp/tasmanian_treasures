import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="Tasmanian Treasures" className="logo" />
          <span>Tasmanian Treasures</span>
        </Link>
        <nav className="nav">
          <a href="/#products">Products</a>
          <a href="/#custom">Custom</a>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}