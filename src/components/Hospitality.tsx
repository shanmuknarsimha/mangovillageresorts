import { Star } from "lucide-react";
import hospitalityImage from "../assets/gallery/hospitallity.webp"; // replace with your image

export default function Hospitality() {
  const points = [
    "Thoughtfully curated weddings and celebrations.",
    "Effortless corporate meets and private gatherings.",
    "Peaceful escapes designed for relaxation.",
    "Refined dining with attentive service.",
  ];

  return (
    <section id="about" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2  items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-900 tracking-wide mb-6">
              Redefining Hospitality
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Every detail is thoughtfully considered to create experiences that feel effortless, elegant, and deeply memorable.
            </p>

            <ul className="space-y-4 mb-4">
              {points.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="flex items-center justify-center min-w-7 min-h-7 rounded-full border border-gold text-gold mt-0.5">
                    <Star size={14} />
                  </span>
                  <span className="text-gray-800 text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold-dark transition">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={hospitalityImage}
              alt="Hospitality Team"
              className="h-full rounded-2xl md:rounded-3xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
