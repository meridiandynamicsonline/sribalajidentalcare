import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  LaptopMinimal,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalized Dental Care",
    description:
      "Every treatment is tailored to your dental needs, comfort, and oral health goals.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Comfort & Safety",
    description:
      "We prioritize your comfort, hygiene, and a reassuring dental experience.",
  },
  {
    icon: LaptopMinimal,
    title: "Convenient Appointments",
    description:
      "Get in touch with our clinic to arrange a visit at a time that works for you.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F7F7FC] py-28">
      {/* Static Decorative Backgrounds (Calm, no floating animations) */}
      <div
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#191970]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#DCDCF2]/40 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          eyebrow="About Our Clinic"
          title="Sri Balaji Dental Care"
          description="Dedicated to creating healthier smiles through personalized dental care, a patient-first approach, and a commitment to your long-term oral health."
        />

        <div className="mt-16 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT: Clinic Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#DCDCF2] via-[#F5EFE7] to-[#F1F1FA] shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />

              {/* Replace this with an actual clinic or dentist image */}
              <div className="flex h-[560px] items-center justify-center">
                <span className="text-lg font-medium text-[#191970]">
                  Dental Clinic
                </span>
              </div>

              <div className="absolute inset-0 rounded-[42px] border border-white/40" />
            </motion.div>

            {/* Clinic Badge */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 rounded-3xl bg-white/95 px-8 py-6 shadow-xl backdrop-blur-md sm:-bottom-8 sm:-right-8"
            >
              <h3 className="text-5xl font-bold text-[#191970]">Care</h3>
              <p className="mt-1 font-medium text-[#6B7280]">
                For Every Smile
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={item}
              className="text-3xl font-bold leading-tight text-[#10105B] sm:text-4xl"
            >
              Your Smile, <br /> Our Priority
            </motion.h3>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-relaxed text-[#6B7280]"
            >
              At Sri Balaji Dental Care, we believe every smile deserves
              attention and care. Our approach focuses on understanding your
              concerns, explaining your treatment options, and helping you
              maintain healthy teeth and gums in a comfortable and welcoming
              environment.
            </motion.p>

            {/* Features List */}
            <motion.ul variants={container} className="mt-10 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.li
                    key={feature.title}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group flex gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DCDCF2]/50 text-[#191970] transition-colors group-hover:bg-[#DCDCF2]">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F2937]">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-[#6B7280] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}