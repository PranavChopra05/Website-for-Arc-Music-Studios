import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Our Work", id: "our-work" },
    { name: "About", id: "about" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white px-6 md:px-10 py-4 flex items-center justify-between font-oswald">
      {/* Logo */}
      <div
        className="text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => handleScroll("home")}
      >
        Arc
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-12">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleScroll(link.id)}
            className="relative cursor-pointer transition-all duration-300 hover:text-red-500"
          >
            {link.name}
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-red-500 transition-all duration-300 hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Contact Button (Desktop Only) */}
      <div className="hidden md:block">
        <button
          onClick={() => handleScroll("contact")}
          className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-red-500/50"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-lg hover:text-red-500 transition"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-red-500/50"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};
