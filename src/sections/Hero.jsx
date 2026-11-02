import { motion } from "framer-motion";
import FloatingCard from "../components/ui/FloatingCard";

// 1. Import BOTH images
import mobileBgImg from "../assets/images/1.jpg";
// Replace "therapist.jpg" with the actual filename of your desktop portrait
import desktopPortraitImg from "../assets/images/2.jpg"; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF9] pb-16 pt-24 md:pb-24 lg:pt-32">
      
      {/* 
        MOBILE & TABLET BACKGROUND IMAGE 
        Uses 1.jpg specifically for smaller screens
      */}
      <div 
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          backgroundImage: `url(${mobileBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAF9]/80 via-[#F7FAF9]/50 to-[#F7FAF9]/80 backdrop-blur-[1px]" />
      </div>

      {/* DESKTOP BACKGROUND BLOBS */}
      <div 
        className="pointer-events-none absolute -left-32 -top-32 z-0 hidden h-96 w-96 rounded-full bg-[#DDF2E6]/60 blur-3xl lg:block" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute right-0 top-60 z-0 hidden h-80 w-80 rounded-full bg-[#F5EFE7]/60 blur-3xl lg:block" 
        aria-hidden="true"
      />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* LEFT: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#153a2b]">
            Professional Therapy
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
            Helping You Heal,
            <br className="hidden sm:block" /> Restore Balance,
            <br className="hidden sm:block" /> and Find Peace.
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#000000] lg:mx-0 lg:text-[#000000]">
            Compassionate therapy and certified Pranic Healing designed to
            support emotional well-being, inner balance, and lasting personal
            growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <motion.a 
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex w-full items-center justify-center rounded-full bg-[#1f523d] px-8 py-4 font-medium text-white shadow-lg transition-colors hover:bg-[#1f523d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#DDF2E6] sm:w-auto"
            >
              Book Consultation
            </motion.a>

            <motion.a 
              href="/#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white/60 px-8 py-4 font-medium text-[#1F2937] shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto lg:bg-white/50"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: Visuals */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-[420px] justify-center lg:flex"
        >
          <div className="relative w-full">
            
            {/* Decorative Rings */}
            <div 
              className="absolute left-1/2 top-1/2 -z-20 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DDF2E6]/50" 
              aria-hidden="true" 
            />
            <div 
              className="absolute left-1/2 top-1/2 -z-20 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5EFE7]/50" 
              aria-hidden="true" 
            />

            {/* Background Glow */}
            <div 
              className="absolute inset-0 -z-10 scale-110 rounded-[42%] bg-gradient-to-br from-[#DDF2E6] to-[#F5EFE7] opacity-60 blur-3xl" 
              aria-hidden="true" 
            />

            {/* Portrait Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-[550px] w-full overflow-visible rounded-[42%] bg-gradient-to-br from-[#DFF4E5] to-[#F5EFE7] shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
            >
              {/* Uses the separate desktop portrait image */}
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[42%]">
                <img
                  src={desktopPortraitImg}
                  alt="Sri Balaji Dental Care - Professional Dentist in Lucknow"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Card - Left */}
              <div className="absolute -left-12 top-24 z-30">
                <FloatingCard
                  title="500+"
                  subtitle="Happy Clients"
                />
              </div>

              {/* Floating Card - Right */}
              <div className="absolute -right-4 bottom-28 z-30">
                <FloatingCard
                  title="Certified"
                  subtitle="Pranic Healer"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}