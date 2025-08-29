import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo} onClick={handleLinkClick}>
            Tasmanian Treasures
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/#products">Collections</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/products" legacyBehavior>
            <a className={styles.ctaButton}>Shop All</a>
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu (Dropdown) */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/#products" onClick={handleLinkClick}>Collections</Link>
          <Link href="/about" onClick={handleLinkClick}>Our Story</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          <Link href="/wholesale" onClick={handleLinkClick}>Wholesale</Link>
          <Link href="/products" legacyBehavior>
            <a className={styles.mobileCtaButton} onClick={handleLinkClick}>Shop All Products</a>
          </Link>
        </nav>
      )}
    </header>
  );
}
