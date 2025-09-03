import { Mic, SlidersHorizontal, Music4 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Mic className="w-12 h-12 text-brand" />,
      title: "Recording",
      desc: "Capture every detail of your sound with our professional-grade recording booths and industry-standard microphones.",
    },
    {
      icon: <SlidersHorizontal className="w-12 h-12 text-brand" />,
      title: "Mixing & Mastering",
      desc: "Get a polished, radio-ready sound. Our engineers ensure every track hits with clarity, balance, and impact.",
    },
    {
      icon: <Music4 className="w-12 h-12 text-brand" />,
      title: "Beat Production",
      desc: "From trap to lo-fi to EDM, we craft custom beats tailored to your vibe and artistic vision.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
