import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react"

import startIcon from "../assets/icon.png"

import devarapalli from "../assets/gallery/devarapalli.webp"
import araku from "../assets/gallery/araku.webp"
import lambasinghi from "../assets/gallery/lambasinghi.webp"
import vanjangi from "../assets/gallery/vanjangi.avif"

const attractions = [
  {
    title: "Devarapalli Waterfalls",
    image: devarapalli,
    description:
      "A serene cascade surrounded by dense greenery, perfect for a refreshing escape into nature and quiet moments away from the city.",
    distance: "25.8 km",
    time: "51 min",
  },
  {
    title: "Araku Valley",
    image: araku,
    description:
      "A scenic hill station known for misty mornings, coffee plantations, tribal culture, and breathtaking viewpoints along the Eastern Ghats.",
    distance: "89.9 km",
    time: "2 hr 22 min",
  },
  {
    title: "Vanjangi",
    image: vanjangi,
    description:
      "Famous for its magical sunrise above the clouds, Vanjangi is a must-visit for nature lovers and early-morning explorers.",
    distance: "78.7 km",
    time: "2 hr 25 min",
  },
  {
    title: "Lambasinghi",
    image: lambasinghi,
    description:
      "Often called the Kashmir of Andhra Pradesh, Lambasinghi offers cool weather, foggy landscapes, and peaceful forest surroundings.",
    distance: "95.1 km",
    time: "3 hr",
  },
]
export default function TouristAttractions() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () =>
    setIndex((i) => (i === 0 ? attractions.length - 1 : i - 1))

  const next = () =>
    setIndex((i) => (i === attractions.length - 1 ? 0 : i + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
    touchStartX.current = null
  }

  const item = attractions[index]

  return (
    <section className="bg-white md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-serif text-4xl md:text-5xl text-emerald-800 mb-16">
          Tourist Attractions
        </h2>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-40 lg:-translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-[#d4af37] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-40 lg:-translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-[#d4af37] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* CARD */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-12 transition-all duration-500">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-[28px]"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 rounded-[32px] md:border md:border-neutral-200 p-3">
              <div className="rounded-[26px] md:bg-[#fbf7ef] md:p-10">
                <h3 className="font-serif text-3xl text-emerald-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-700 text-lg mb-8">
                  {item.description}
                </p>

                <div className="flex items-center w-full text-neutral-800">

                  {/* Resort */}
                  <div className="flex flex-col items-center gap-1 w-[30%] min-w-[88px]">
                    <img src={startIcon} className="w-7 h-7" />
                    <span className="text-xs font-medium text-neutral-600 text-center">
                      Mango Village Resorts
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex flex-col items-center gap-1 flex-1 max-w-[180px]">

                    {/* Distance above */}
                    <div className="flex items-center gap-1 text-sm text-neutral-700">
                      <span className="font-semibold">{item.distance}</span>
                    </div>

                    {/* Dotted line */}
                    <div className="w-full border-t-2 border-dotted border-neutral-500"></div>

                    {/* Time below */}
                    <div className="flex items-center gap-1 text-sm text-neutral-700">
                      <Clock className="w-5 h-5 text-emerald-700" />
                      <span className="font-semibold">{item.time}</span>
                    </div>
                    
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col items-center gap-1 w-[30%] min-w-[88px]">
                    <MapPin className="w-7 h-7 text-emerald-700" />
                    <span className="text-xs font-medium text-neutral-600 text-center leading-tight">
                      {item.title}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

