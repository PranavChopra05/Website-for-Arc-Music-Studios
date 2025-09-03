import { motion } from "framer-motion";

interface WorkItem {
  title: string;
  link: string;
}

const works: WorkItem[] = [
  {
    title: "Original Track - Midnight Vibes",
    link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID1",
  },
  {
    title: "Beat Production - Trap Energy",
    link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID2",
  },
  {
    title: "Mix & Master - Smooth Jazz",
    link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID3",
  },
];

export const OurWork = () => {
  return (
    <section className="bg-brandBg py-20 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold text-center text-brand mb-16 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >
        Our Work
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={work.link.replace("watch?v=", "embed/")}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-oswald text-xl font-semibold text-gray-800">
                {work.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
