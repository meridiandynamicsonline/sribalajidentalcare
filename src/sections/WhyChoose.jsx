import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

import {
  Brain,
  Heart,
  ShieldCheck,
  Globe,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Professional Expertise",
    text: "Evidence-informed therapy combined with compassionate guidance.",
  },
  {
    icon: Sparkles,
    title: "Certified Pranic Healing",
    text: "Holistic energy healing that complements emotional wellness.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    text: "Every client receives empathy, patience, and personalized attention.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Confidentiality",
    text: "Your privacy and trust remain our highest priority.",
  },
  {
    icon: Globe,
    title: "Online & Offline Sessions",
    text: "Flexible consultations to fit your schedule and location.",
  },
  {
    icon: Users,
    title: "Personalized Healing",
    text: "Every treatment plan is tailored to your individual needs.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose"
          title="Why Choose Sri Balaji Dental Care?"
          description="A thoughtful approach that combines professional therapy with holistic healing to support your emotional well-being."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-[32px] border border-gray-100 bg-[#F7FAF9] p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#DDF2E6]/50 p-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#5F8D7A]" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#1F2937] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-[#6B7280]">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}