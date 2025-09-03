import  { motion } from "framer-motion";
import  type {  Variants } from "framer-motion";

export const Hero = () => {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variants for heading words (fade + rise from below)
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: i * 0.3, 
        ease: [0.25, 0.1, 0.25, 1] // instead of "easeOut"
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-brandCardBg bg-cover bg-center overflow-hidden px-4 sm:px-6 md:px-10">
      
      {/* Gradient Overlay */}
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
        initial="hidden"
        animate="visible"
        className="relative z-10 font-heading pb-6 sm:pb-8 md:pb-10 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   font-black tracking-wide text-center 
                   drop-shadow-[0_0_25px_rgba(0,0,0,0.7)] 
                   flex flex-wrap items-center justify-center gap-2 sm:gap-4"
      >
        {["Arc", "Music", "Studios"].map((word, i) => (
          <motion.span
            key={word}
            variants={wordVariants}
            custom={i}
            className="text-navText"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sub-intro words */}
      <div className="relative z-10 flex flex-wrap justify-center 
                      gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-4 sm:mt-6 
                      font-oswald text-lg sm:text-xl md:text-2xl lg:text-3xl text-navText">
        {["Creativity", "Precision", "Passion"].map((word, index) => (
          <motion.h2
            key={word}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 + index * 0.3 }}
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
        transition={{ duration: 0.6, delay: 3 }}
        className="relative z-10 mt-10 sm:mt-12 md:mt-14"
      >
        <motion.button
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 
                     rounded-2xl bg-red-600 text-white 
                     text-base sm:text-lg md:text-xl font-semibold 
                     shadow-lg hover:bg-red-700 
                     transition-all duration-300 
                     hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        >
          Book a Session
        </motion.button>
      </motion.div>
    </div>
  );
};
