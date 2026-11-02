import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Globe,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Professional Care",
    subtitle: "Dental care tailored to your needs",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    subtitle: "Care focused on your comfort",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene",
    subtitle: "Attention to cleanliness and patient safety",
  },
  {
    icon: Globe,
    title: "Convenient Appointments",
    subtitle: "Get in touch to plan your dental visit",
  },
];

export default function Trust() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-3xl border border-gray-100 bg-[#F7FAF9] p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDF2E6]/50 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-7 w-7 text-[#5F8D7A]" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-[#1F2937]">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-[#6B7280]">
                {item.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}