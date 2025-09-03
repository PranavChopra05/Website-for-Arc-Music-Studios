import { motion } from "framer-motion";

export const Hero = () => {

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-brandCardBg bg-cover bg-center overflow-hidden">
      
      {/* Gradient Overlay for Depth (🔥 fire-like effect) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,80,0,0.4), transparent 70%)",
            "radial-gradient(circle at 80% 40%, rgba(255,0,0,0.5), transparent 70%)",
            "radial-gradient(circle at 50% 70%, rgba(255,120,0,0.5), transparent 70%)",
            "radial-gradient(circle at 20% 30%, rgba(255,80,0,0.4), transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 font-heading pb-10 text-5xl md:text-7xl lg:text-8xl text-navText font-black tracking-wide text-center drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]"
      >
        Arcane Music Studios
      </motion.h1>

      {/* Sub-intro words */}
      <div className="relative z-10 flex justify-center pt-0 gap-8 md:gap-20 mt-6 font-oswald text-xl md:text-3xl text-navText">
        {["Creativity", "Precision", "Passion"].map((word, index) => (
          <motion.h2
            key={word}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.3 }}
            className="hover:scale-110 transition-transform duration-300 cursor-default drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
          >
            {word}
          </motion.h2>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="relative z-10 mt-14"
      >
        <motion.button
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-10 py-4 rounded-2xl bg-red-600 text-white text-lg md:text-xl font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        >
          Book a Session
        </motion.button>
      </motion.div>
    </div>
  );
};
