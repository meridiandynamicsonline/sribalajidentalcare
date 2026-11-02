import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Reactivity: Handle scroll state for glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reactivity: Automatically close mobile menu when navigation occurs
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Reactivity: Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/", isRouter: true },
    { name: "About", path: "/about", isRouter: true },
    { name: "Services", path: "/#services", isRouter: false },
    { name: "Testimonials", path: "/#testimonials", isRouter: false },
    { name: "Contact", path: "/#contact", isRouter: false },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-[#355E4A]">
            Sri Balaji Dental Care
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRouter ? (
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-[#5F8D7A]"
                          : "text-[#6B7280] hover:text-[#5F8D7A]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    href={link.path}
                    className="text-[#6B7280] transition-colors duration-300 hover:text-[#5F8D7A]"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-full bg-[#5F8D7A] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#355E4A] hover:shadow-lg lg:block"
          >
            Book Appointment
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="p-2 text-[#355E4A] lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Reactive Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-white/95 px-6 pt-20 backdrop-blur-3xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-xl font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isRouter ? (
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `transition-colors duration-300 ${
                          isActive
                            ? "font-semibold text-[#5F8D7A]"
                            : "text-[#1F2937] hover:text-[#5F8D7A]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <a
                      href={link.path}
                      onClick={toggleMenu}
                      className="text-[#1F2937] transition-colors duration-300 hover:text-[#5F8D7A]"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <motion.a
              href="/#contact"
              onClick={toggleMenu}
              whileTap={{ scale: 0.98 }}
              className="mt-12 block w-full rounded-full bg-[#5F8D7A] py-4 text-center font-medium text-white shadow-md transition-colors hover:bg-[#355E4A]"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}