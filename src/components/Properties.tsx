import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  HandPlatter,
  Waves,
  BedDouble,
  Home,
  Heart,
  Crown,
} from "lucide-react";

import coplecottageimg from "../assets/gallery/cplstay.webp";
import csinterior from "../assets/gallery/csinterior.webp";
import tinyhomes from "../assets/gallery/tinyhomes.webp";
import premiumcottageimg from "../assets/gallery/lxryhomes.webp";
import newinterior from "../assets/gallery/newInterior.webp"
import lxryhomesitting from "../assets/gallery/lxryhomesitting.webp"
import lxryhomeblkny from "../assets/gallery/lxryhomeblkny.webp"
import premiumsuites from "../assets/gallery/lxrysuites.webp";
import canopybed from "../assets/gallery/canopybed.webp";
import vintagechairs from "../assets/gallery/vintagechairs.webp";

export default function Cottages() {
  const cottages = [
    {
      category: "Premium Cottage",
      name: "Premium Cottages",
      subtitle: "Spacious & refined living",
      count: "5 Cottages",
      bedtype: "King Size Bed",
      image: premiumcottageimg,
      images: [premiumcottageimg, newinterior, lxryhomesitting,lxryhomeblkny],
      features: [
        "Alphonso",
        "Banginapalli",
        "Rasalu",
        "Kobbarimamidi",
        "Suvarnareka",
      ],
      icon: Crown,
    },
    {
      category: "Vintage Cottages",
      name: "Vintage Cottages",
      subtitle: "Elevated luxury experience",
      count: "4 Cottages",
      bedtype: "Canopy Bed",
      image: premiumsuites,
      images: [premiumsuites, canopybed, vintagechairs],
      features: ["Brindavanam", "Gokulam", "Amrutham", "Madhuram"],
      icon: Crown,
    },
    {
      category: "Couple Cottages",
      name: "Couple Cottages",
      subtitle: "Private & intimate stay",
      count: "4 Cottages",
      bedtype: "Queen Size Bed",
      image: coplecottageimg,
      images: [tinyhomes, coplecottageimg, csinterior ],
      features: ["Romantic", "Private", "Nature-facing"],
      icon: Heart,
    },
  ];

  /* ---------------- ACTIVE IMAGE PER CARD ---------------- */
  const [activeImages, setActiveImages] = useState(
    cottages.map((c) => c.image)
  );

  const changeImage = (cardIndex: number, img: string) => {
    setActiveImages((prev) => {
      const updated = [...prev];
      updated[cardIndex] = img;
      return updated;
    });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* ---------------- RESPONSIVE ---------------- */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = cottages.length - cardsPerView;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  /* ---------------- MOBILE SWIPE ---------------- */
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section id="cottages" className="pb-16 md:pb-24 sm:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-14 gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary">
            Explore Our Cottages
          </h2>

          <button className="inline-flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold-dark transition">
            View All
          </button>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {cardsPerView < 3 && currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gold/40 rounded-full p-2 hover:scale-105 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>
          )}

          {/* Right Arrow */}
          {cardsPerView < 3 && currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gold/40 rounded-full p-2 hover:scale-105 transition"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          )}

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="flex md:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out select-none"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {cottages.map((item, index) => {
                // const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.34rem)] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white"
                  >
                    {/* Main Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={activeImages[index]}
                        alt={item.name}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Thumbnail Grid */}
                      <div className="flex gap-2 mb-3">
                        {item.images.map((img, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => changeImage(index, img)}
                            className={`w-12 h-12 rounded-lg overflow-hidden border ${
                              activeImages[index] === img
                                ? "border-gold"
                                : "border-gray-200"
                            }`}
                          >
                            <img
                              src={img}
                              className="w-full h-full object-cover"
                              alt=""
                            />
                          </button>
                        ))}
                      </div>

                      <h3 className="font-serif text-xl font-semibold mb-1 flex items-center gap-2">
                        {/* <Icon className="w-5 h-5 text-gold" /> */}
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm mb-4">
                        {item.subtitle}
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-4">
                        <div className="flex items-center gap-2">
                          <Home className="w-5 h-5 text-gold" />
                          {item.count}
                        </div>
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-5 h-5 text-gold" />
                          {item.bedtype}
                        </div>
                        <div className="flex items-center gap-2">
                          <HandPlatter className="w-5 h-5 text-gold" />
                          Dining
                        </div>
                        <div className="flex items-center gap-2">
                          <Waves className="w-5 h-5 text-gold" />
                          Swimming Pool
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-full text-sm">
                          Explore
                        </button>
                        <button className="flex-1 bg-gold text-white py-2.5 rounded-full text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
