import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import {
  CalendarDays,
  MessageCircleHeart,
  ClipboardCheck,
  HeartPulse,
  TrendingUp,
  Smile,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book Consultation",
    description:
      "Choose a convenient time for your first session online or in person.",
  },
  {
    icon: MessageCircleHeart,
    title: "Understand Your Challenges",
    description:
      "Share your concerns in a safe, supportive, and confidential environment.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Healing Plan",
    description:
      "Receive a therapy and healing plan tailored to your individual needs.",
  },
  {
    icon: HeartPulse,
    title: "Healing Sessions",
    description:
      "Participate in regular therapy and Pranic Healing sessions focused on progress.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Celebrate improvements while adjusting the approach as needed.",
  },
  {
    icon: Smile,
    title: "Balanced Living",
    description:
      "Develop healthier habits, emotional resilience, and lasting inner peace.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="overflow-hidden bg-[#F7FAF9] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Healing Journey"
          title="What to Expect"
          description="Every journey is unique, but each one begins with a caring conversation and a personalized path toward well-being."
        />

        <div className="relative mt-16 lg:mt-24">
          {/* Vertical line - Adjusted for perfect centering with the dots */}
          <div 
            className="absolute left-6 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-[#DDF2E6] lg:left-1/2" 
            aria-hidden="true" 
          />

          {/* Timeline Container (Semantic Ordered List) */}
          <ol className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#5F8D7A] font-bold text-white shadow-md ring-4 ring-[#F7FAF9] lg:left-1/2"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>

                  {/* Card wrapper */}
                  <div className="w-full pl-16 lg:w-[47%] lg:pl-0">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
                    >
                      <div className="mb-5 inline-flex rounded-2xl bg-[#DDF2E6]/50 p-4 text-[#5F8D7A]">
                        <Icon size={28} />
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-[#1F2937] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="leading-relaxed text-[#6B7280]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}