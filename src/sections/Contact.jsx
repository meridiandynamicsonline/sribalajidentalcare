import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Globe,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#F7FAF9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#5F8D7A]">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-[#355E4A] sm:text-4xl">
            Let's Begin Your Healing Journey
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Whether you're seeking emotional healing, stress relief, or holistic
            wellness, I'd be honored to guide you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* LEFT: Info (Changed x: -30 to y: 30) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/60 bg-white p-8 shadow-lg backdrop-blur-xl sm:p-10"
          >
            <h3 className="mb-8 text-2xl font-semibold text-[#355E4A]">
              Contact Information
            </h3>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Clinic Address", text: "3, Sargodha Colony, Ranjeet Nagar, Kanpur, UP 208005" },
                { icon: Phone, title: "Phone", text: "+91 87953 37700" },
                { icon: Mail, title: "Email", text: "contact@drronalkumar.com" },
                { icon: Clock3, title: "Clinic Hours", text: "Monday – Friday\n10:00 AM – 7:00 PM" },
                { icon: Globe, title: "Online Consultation", text: "Available Worldwide via Zoom / Google Meet" },
              ].map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DDF2E6]/50 text-[#5F8D7A]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F2937]">{item.title}</h4>
                    <p className="mt-1 whitespace-pre-line text-[#6B7280]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form (Changed x: 30 to y: 30 and added slight delay) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-lg"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10"
                >
                  <h3 className="mb-8 text-2xl font-semibold text-[#355E4A]">
                    Book an Appointment
                  </h3>

                  <div className="space-y-5">
                    <input
                      type="text"
                      required
                      aria-label="Full Name"
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-[#1F2937] outline-none transition-all placeholder:text-gray-400 focus:border-[#5F8D7A] focus:bg-white focus:ring-4 focus:ring-[#DDF2E6]"
                    />
                    <input
                      type="email"
                      required
                      aria-label="Email Address"
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-[#1F2937] outline-none transition-all placeholder:text-gray-400 focus:border-[#5F8D7A] focus:bg-white focus:ring-4 focus:ring-[#DDF2E6]"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <input
                        type="tel"
                        required
                        aria-label="Phone Number"
                        placeholder="Phone Number"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-[#1F2937] outline-none transition-all placeholder:text-gray-400 focus:border-[#5F8D7A] focus:bg-white focus:ring-4 focus:ring-[#DDF2E6]"
                      />
                      <input
                        type="date"
                        required
                        aria-label="Preferred Date"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-[#1F2937] outline-none transition-all focus:border-[#5F8D7A] focus:bg-white focus:ring-4 focus:ring-[#DDF2E6]"
                      />
                    </div>
                    <textarea
                      rows="4"
                      required
                      aria-label="Message"
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-[#1F2937] outline-none transition-all placeholder:text-gray-400 focus:border-[#5F8D7A] focus:bg-white focus:ring-4 focus:ring-[#DDF2E6]"
                    ></textarea>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5F8D7A] py-4 font-medium text-white shadow-md transition-colors hover:bg-[#355E4A] hover:shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Book Appointment"
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex h-full min-h-[500px] flex-col items-center justify-center p-8 text-center sm:p-10"
                >
                  <div className="mb-6 rounded-full bg-[#DDF2E6] p-4 text-[#5F8D7A]">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#355E4A]">
                    Request Received
                  </h3>
                  <p className="mt-3 text-[#6B7280]">
                    Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-medium text-[#5F8D7A] transition-colors hover:text-[#355E4A]"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[2rem] shadow-lg md:mt-16"
        >
          <iframe
            title="Sri Balaji Dental Care"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.6498377475336!2d80.30124087513049!3d26.467013879102797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c396302f1135f%3A0x8d55562893f72ebe!2sDr.%20Ronal%20Kumar!5e0!3m2!1sen!2sin!4v1785008452338!5m2!1sen!2sin"
            className="h-[350px] w-full border-0 md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}