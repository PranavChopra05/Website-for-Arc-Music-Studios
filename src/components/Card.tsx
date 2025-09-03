import mixer from '../assets/mixer.jpeg';
import { Disc3, SlidersHorizontal, Music } from "lucide-react"; // Lucide icons

export const Card = () => {
  // Scroll to "contact" section
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white shadow-lg my-20 rounded-xl overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={mixer}
          alt="Arcane Music Studios"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="p-8 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-heading text-brand mb-4">
            Welcome To Arcane Music Studios
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nestled in the heart of the city, <span className="font-semibold">Arcane Music Studios </span> 
            is your creative sanctuary for <span className="text-brandSecondary">recording</span>, 
            <span className="text-brandSecondary"> mixing</span>, and <span className="text-brandSecondary">production</span>.  
            Our state-of-the-art setup ensures every artist’s vision comes alive with unmatched clarity.
          </p>

          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Disc3 className="w-6 h-6 text-brand mr-3" /> Premium Recording Quality
            </li>
            <li className="flex items-center">
              <SlidersHorizontal className="w-6 h-6 text-brand mr-3" /> Expert Mixing & Mastering
            </li>
            <li className="flex items-center">
              <Music className="w-6 h-6 text-brand mr-3" /> Creative & Inspiring Environment
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={handleScrollToContact}
            className="bg-brand hover:bg-brandSecondary text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
};
