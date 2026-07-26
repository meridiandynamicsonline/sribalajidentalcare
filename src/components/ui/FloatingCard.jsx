import { motion } from "framer-motion";

export default function FloatingCard({
  title,
  subtitle,
  className = "",
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-30
        rounded-3xl
        border border-white/60
        bg-white/90
        backdrop-blur-xl
        shadow-2xl
        px-6
        py-5
        ${className}
      `}
    >
      <h3 className="text-2xl font-bold text-[#5F8D7A]">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {subtitle}
      </p>
    </motion.div>
  );
}