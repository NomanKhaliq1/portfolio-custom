"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Only fix header after scrolling past 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = isScrolled ? 80 : 0; // Only apply offset when header is fixed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "fixed w-full top-0" : "relative"} font-montserrat`}>
      <div className="container">
        <div className="row items-center justify-between h-16">
          {/* Logo */}
          <div className="col-6 col-md-3">
            <Link href="/" className="header-logo hover:text-blue-600 transition-colors text-gray" style={{fontSize: '15px'}}>
              &lt;NOMAN KHALIQ /&gt;
            </Link>
          </div>

          {/* Navigation for Desktop */}
          <nav className="col-6 col-md-9 header-nav">
            <ul className="nav-list">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("work")}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle col-6 d-md-none">
            <button 
              className={`menu-icon ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="transition-transform duration-300"></span>
              <span className="transition-opacity duration-300"></span>
              <span className="transition-transform duration-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="mobile-nav-list">
            <li>
              <button 
                onClick={() => scrollToSection("about")}
                className="w-full text-left hover:bg-gray-100 transition-colors py-3 px-4"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("work")}
                className="w-full text-left hover:bg-gray-100 transition-colors py-3 px-4"
              >
                Work
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="w-full text-left hover:bg-gray-100 transition-colors py-3 px-4"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")}
                className="w-full text-left hover:bg-gray-100 transition-colors py-3 px-4"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
