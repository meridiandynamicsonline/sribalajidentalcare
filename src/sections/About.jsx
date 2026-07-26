import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  LaptopMinimal,
  ArrowRight,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalized Healing Plans",
    description: "Every session is tailored to your emotional and mental well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Completely Confidential",
    description: "Your privacy is respected with a safe and judgment-free environment.",
  },
  {
    icon: LaptopMinimal,
    title: "Online & Offline Sessions",
    description: "Flexible appointments from anywhere or in-person consultations.",
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
    <section id="about" className="relative overflow-hidden bg-[#F7FAF9] py-28">
      {/* Static Decorative Backgrounds (Calm, no floating animations) */}
      <div 
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#5F8D7A]/5 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#DDF2E6]/40 blur-3xl" 
        aria-hidden="true" 
      />

      <Container>
        <SectionHeading
          eyebrow="Meet Your Therapist"
          title="Dr. Ronal Kumar"
          description="Dedicated to helping individuals heal emotionally, mentally, and spiritually through professional therapy and certified Pranic Healing."
        />

        <div className="mt-16 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT: Portrait */}
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
              className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#DDF2E6] via-[#F5EFE7] to-[#EEF8F2] shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
              
              {/* Replace this with actual image */}
              <div className="flex h-[560px] items-center justify-center">
                <span className="text-lg font-medium text-[#5F8D7A]">
                  Therapist Portrait
                </span>
              </div>

              <div className="absolute inset-0 rounded-[42px] border border-white/40" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 rounded-3xl bg-white/95 px-8 py-6 shadow-xl backdrop-blur-md sm:-bottom-8 sm:-right-8"
            >
              <h3 className="text-5xl font-bold text-[#5F8D7A]">8+</h3>
              <p className="mt-1 font-medium text-[#6B7280]">Years Experience</p>
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
              className="text-3xl font-bold leading-tight text-[#355E4A] sm:text-4xl"
            >
              Therapist & <br /> Certified Pranic Healer
            </motion.h3>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-relaxed text-[#6B7280]"
            >
              Helping individuals overcome stress, anxiety, emotional
              imbalance, trauma, and life's challenges through compassionate
              counseling and holistic healing.
            </motion.p>

            {/* Features List (Semantic HTML `ul`) */}
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
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DDF2E6]/50 text-[#5F8D7A] transition-colors group-hover:bg-[#DDF2E6]">
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