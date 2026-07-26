import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#355E4A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">Dr. Ronal Kumar</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Helping individuals achieve emotional, mental, and spiritual
              well-being through compassionate therapy and certified Pranic
              Healing.
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { icon: FaFacebookF, label: "Facebook", href: "#" },
                { icon: FaInstagram, label: "Instagram", href: "#" },
                { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
                { icon: FaYoutube, label: "YouTube", href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#5F8D7A]"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-white/80">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/#services" },
                { name: "Testimonials", path: "/#testimonials" },
                { name: "Contact", path: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>
            <div className="space-y-5 text-sm text-white/80">
              <a href="#contact" className="group flex gap-4 transition-colors hover:text-white">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#5F8D7A]">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">3, Sargodha Colony, Ranjeet Nagar, Kanpur, UP 208005</span>
              </a>

              <a href="tel:+918795337700" className="group flex items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#5F8D7A]">
                  <Phone size={16} />
                </div>
                <span>+91 87953 37700</span>
              </a>

              <a href="mailto:contact@drronalkumar.com" className="group flex items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#5F8D7A]">
                  <Mail size={16} />
                </div>
                <span>contact@drronalkumar.com</span>
              </a>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Ready to Begin?</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Take the first step towards a healthier, happier, and more
              balanced life.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full rounded-full bg-[#5F8D7A] px-7 py-4 font-medium text-white shadow-lg transition-colors hover:bg-[#DDF2E6] hover:text-[#355E4A] sm:w-auto"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:text-left"
        >
          <p>
            © {new Date().getFullYear()} Dr. Ronal Kumar. All Rights Reserved.
          </p>

          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://meridiandynamics.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#DDF2E6] transition-colors hover:text-white"
            >
              Meridian Dynamics
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}