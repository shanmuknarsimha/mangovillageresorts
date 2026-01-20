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
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [exiting, setExiting] = useState(false)
  const [elasticDir, setElasticDir] = useState<null | "right" | "left">(null)
  const [history, setHistory] = useState<number[]>([])
  const [restoring, setRestoring] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const startTransition = (dir: "left" | "right") => {
    if (exiting) return

    const atFirst = index === 0
    const atLast = index === attractions.length - 1

    // 🚫 Elastic stop (KEEP AS IS)
    if ((dir === "left" && atFirst) || (dir === "right" && atLast)) {
      setElasticDir(dir)
      setTimeout(() => setElasticDir(null), 150)
      return
    }

    // ============================
    // 🔴 LEFT CLICK: RESTORE(RE-ENTER CARD) ONLY
    // ============================
    if (dir === "left") {
      const prev = history[history.length - 1]
      if (prev === undefined) return

      setRestoring(true)
      setDirection("right")
      setIndex(prev)
      setHistory(h => h.slice(0, -1))

      requestAnimationFrame(() => setRestoring(false))
      return
    }

    // ============================
    // 🟢 RIGHT CLICK: EXIT CARD
    // ============================
    setHistory(h => [...h, index])       // ✅ EXACT LINE GOES HERE

    setDirection("right")
    setExiting(true)

    setTimeout(() => {
      setIndex(i => i + 1)
      setExiting(false)
    }, 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || exiting) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) startTransition("right")
    if (diff < -50) startTransition("left")
    touchStartX.current = null
  }

  const renderCard = (itemIndex: number) => {
    const item = attractions[itemIndex]

    return (
      <div className="min-h-[660px] md:min-h-[0px] flex flex-col lg:flex-row items-center border border-neutral-200 lg:gap-12 bg-[#fbf7ef] p-4 rounded-3xl shadow-xl">
        <div className="w-full lg:w-1/2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-[28px]"
          />
        </div>

        <div className="w-full lg:w-1/2 p-3">
          <h3 className="font-serif h-[72px] md:h-[36px] text-3xl text-emerald-800 mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
            {item.title}
          </h3>

          <p className="text-neutral-700 text-lg mb-8 text-center lg:text-left">
            {item.description}
          </p>

          <div className="flex items-center w-full text-neutral-800">
            <div className="flex flex-col items-center gap-1 w-[30%] min-w-[88px]">
              <img src={startIcon} className="w-7 h-7" />
              <span className="text-xs font-medium text-neutral-600 text-center">
                Mango Village Resorts
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 flex-1 max-w-[180px]">
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold">{item.distance}</span>
              </div>

              <div className="w-full border-t-2 border-dotted border-neutral-500" />

              <div className="flex items-center gap-1 text-sm">
                <Clock className="w-5 h-5 text-emerald-700" />
                <span className="font-semibold">{item.time}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 w-[30%] min-w-[88px]">
              <MapPin className="w-7 h-7 text-emerald-700" />
              <span className="text-xs font-medium text-neutral-600 text-center">
                {item.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
          {history.length > 0 && (
          <button
            onClick={() => startTransition("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-40 bg-white shadow-lg border border-gold/40 rounded-full p-2"
          >
            <ChevronLeft className="w-5 h-5 text-gold" />
          </button>
          )}
          {index < attractions.length - 1 && (
          <button
            onClick={() => startTransition("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-40 bg-white shadow-lg border border-gold/40 rounded-full p-2"
          >
            <ChevronRight className="w-5 h-5 text-gold" />
          </button>
          )}
          {/* STACK */}
          <div className="relative h-[720px] md:h-[540px] flex items-center justify-center">
            {[0, 1, 2, 3].map((offset) => {
              const itemIndex = index + offset
              if (itemIndex >= attractions.length) return null

              const isActive = offset === 0

              const elastic =
                isActive && !exiting && elasticDir
                  ? elasticDir === "right"
                    ? "-translate-x-8 scale-[0.98]"
                    : "translate-x-8 scale-[0.98]"
                  : ""

              return (
                <div
                  key={itemIndex}
                  className={`
                    absolute w-full max-w-5xl
                    transition-transform duration-500 ease-in-out
                    ${isActive ? "z-30 scale-100 opacity-100" : ""}
                    ${isActive && exiting && direction === "right" ? "-translate-x-full" : ""}
                    ${isActive && !exiting && restoring && direction === "right"
                      ? "-translate-x-full"
                      : ""
                    }
                    ${offset === 1 && exiting && direction === "left"
                      ? "translate-x-full"
                      : ""
                    }
                    ${offset === 1 && "z-20 scale-[0.96] opacity-90 -translate-y-[24px]"}
                    ${offset === 2 && "z-10 scale-[0.92] opacity-80 -translate-y-[48px]"}
                    ${offset === 3 && "z-0 scale-[0.88] opacity-70 -translate-y-[72px]"}
                    ${elastic}
                  `}
                >
                  {renderCard(itemIndex)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
