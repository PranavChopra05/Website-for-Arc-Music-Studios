import { Headphones, Volume2, Guitar, Building } from "lucide-react";

export const KeyPoints = () => {
  const points = [
    {
      icon: <Headphones className="w-12 h-12 text-brand" />,
      title: "Cutting-Edge Equipment",
      desc: "Arcane Music Studios is powered by industry-leading gear and technology. From pristine microphones to world-class mixing consoles, we deliver unmatched sound clarity.",
    },
    {
      icon: <Volume2 className="w-12 h-12 text-brand" />,
      title: "Crystal Sound Quality",
      desc: "We specialize in delivering flawless, high-fidelity recordings. Every session is engineered to capture the emotion and detail of your performance.",
    },
    {
      icon: <Guitar className="w-12 h-12 text-brand" />,
      title: "Live Instruments",
      desc: "Whether it’s guitars, drums, or synths—our wide range of instruments is available for artists to experiment and craft unique sounds.",
    },
    {
      icon: <Building className="w-12 h-12 text-brand" />,
      title: "Versatile Studios",
      desc: "With multiple acoustically treated spaces, Arcane offers the perfect environment for solo projects, full-band recordings, or professional mixing sessions.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 text-center">
        {points.map((point, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-3">
              {point.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
