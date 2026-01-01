import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

// AUTO-IMPORT ALL IMAGES
const imageModules = import.meta.glob(
  "../assets/gallery/exp/*.{jpg,jpeg,png,webp}",
  { eager: true }
)

const images = Object.values(imageModules).map(
  (mod: any) => mod.default
)

export default function Gallery() {
  const [active, setActive] = useState(0)

  // 👉 SWIPE REFS
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    if (distance > minSwipeDistance) {
      setActive(active === images.length - 1 ? 0 : active + 1)
    }

    if (distance < -minSwipeDistance) {
      setActive(active === 0 ? images.length - 1 : active - 1)
    }
  }

  if (!images.length) return null

  return (
    <section id="gallery" className="bg-stone-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-stretch">

          {/* LEFT CONTENT */}
          <div className="bg-white rounded-3xl border border-stone-200 p-10 flex flex-col justify-center">
            <h2 className="font-serif text-4xl text-primary tracking-wide mb-6 leading-tight">
              Timeless<br />Moments
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Wander through scenes of quiet luxury — sunlit courtyards,
              heritage-inspired architecture, lush gardens, and serene
              retreats where nature and nostalgia exist in perfect harmony.
            </p>
          </div>

          {/* RIGHT IMAGE (SWIPE + MOBILE ARROWS) */}
          <div
            className="relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={images[active]}
              alt="Luxury nature retreat"
              className="w-full h-full rounded-3xl object-cover aspect-[16/10]"
            />

            {/* MOBILE LEFT ARROW */}
            <button
              onClick={() =>
                setActive(active === 0 ? images.length - 1 : active - 1)
              }
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-[#d4af37] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5 text-stone-700" />
            </button>

            {/* MOBILE RIGHT ARROW */}
            <button
              onClick={() =>
                setActive(active === images.length - 1 ? 0 : active + 1)
              }
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-[#d4af37] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5 text-stone-700" />
            </button>
          </div>
        </div>

        {/* THUMBNAILS (ALWAYS VISIBLE – MOBILE + DESKTOP) */}
        <div className="mt-10 flex gap-4 overflow-x-scroll lg:overflow-x-auto lg:justify-center">

          {/* CIRCLE THUMBNAILS */}
          <div className="flex gap-3 max-w-[70vw] scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`min-w-16 min-h-16 max-w-16 max-h-16 rounded-full overflow-hidden border-2 transition ${
                  active === i ? "border-[#c6a75e]" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
