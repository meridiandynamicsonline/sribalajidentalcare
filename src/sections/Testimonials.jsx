import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { MoveRight } from "lucide-react";

const testimonials = [
  {
    name: "Patient",
    text: "I felt heard from the very first consultation. The sessions helped me regain confidence and emotional balance.",
  },
  {
    name: "Patient",
    text: "The calm environment and personalized guidance made every session meaningful and reassuring.",
  },
  {
    name: "Patient",
    text: "A compassionate and professional experience that truly supported my mental well-being.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#FAF9F6] py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind Words from Clients"
          description="Experiences shared by individuals who have trusted Sri Balaji Dental Care with their precious smile."
        />

        {/* 
          MOBILE: Horizontal Flex with Scroll Snap
          DESKTOP: Standard CSS Grid 
        */}
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:mt-16 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="w-[85vw] shrink-0 snap-center rounded-[32px] bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl sm:w-[350px] md:w-auto md:shrink sm:p-8"
            >
              <div className="mb-5 text-xl text-yellow-500">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-600">
                "{item.text}"
              </p>

              <h4 className="mt-8 font-semibold">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#5F8D7A] md:hidden"
        >
          <span>Swipe for more</span>
          <MoveRight size={16} />
        </motion.div>
      </Container>
    </section>
  );
}