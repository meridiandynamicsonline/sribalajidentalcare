import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { Brain, HeartHandshake, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Therapy",
    description:
      "Professional counseling for stress, anxiety, depression, and emotional well-being.",
  },
  {
    icon: Sparkles,
    title: "Pranic Healing",
    description:
      "Energy-based healing techniques to restore balance and support holistic wellness.",
  },
  {
    icon: HeartHandshake,
    title: "Wellness Coaching",
    description:
      "Guidance for mindfulness, personal growth, and healthier lifestyle habits.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FAF9F6] py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="Personalized care designed to support your emotional, mental, and energetic well-being."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-[32px] bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl sm:p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#5F8D7A]" />
                </div>

                <h3 className="mb-4 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}