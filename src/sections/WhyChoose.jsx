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
    title: "Patient-Focused Care",
    text: "Dental care recommendations guided by your oral health needs and concerns.",
  },
  {
    icon: Sparkles,
    title: "Personalized Treatment",
    text: "Treatment options tailored to your dental condition and individual needs.",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    text: "A considerate experience with attention to your comfort at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene",
    text: "A focus on cleanliness and patient safety throughout your visit.",
  },
  {
    icon: Globe,
    title: "Convenient Appointments",
    text: "Get in touch with our clinic to arrange a visit that suits your schedule.",
  },
  {
    icon: Users,
    title: "Guidance & Follow-Up",
    text: "Understand your treatment options and receive aftercare guidance when needed.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Sri Balaji Dental Care?"
          description="We focus on patient comfort, personalized dental care, and clear guidance to help you make informed decisions about your oral health."
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
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-[32px] border border-gray-100 bg-[#F7F7FC] p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#DCDCF2]/50 p-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#191970]" />
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