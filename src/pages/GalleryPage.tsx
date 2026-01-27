import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import Header from "../components/Header"
import Footer from "../components/Footer"

/* ===============================
   LOAD ALL GALLERY IMAGES
================================ */
const imageModules = import.meta.glob(
  "../assets/gallery/exp/*.{jpg,jpeg,png,webp}",
  { eager: true }
)

const images = Object.values(imageModules).map((mod: any) => mod.default)

/* PRESET SCATTER STYLES */
const scatterStyles = [
  "rotate-[-6deg] translate-y-2",
  "rotate-[4deg] -translate-y-3",
  "rotate-[-2deg] translate-x-2",
  "rotate-[6deg] -translate-x-2",
  "rotate-[1deg] translate-y-4",
  "rotate-[-4deg] -translate-y-2",
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef<number | null>(null)

  /* SCREEN SIZE */
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 500)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  /* KEYBOARD */
  useEffect(() => {
    if (activeIndex === null || isMobile) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
      if (e.key === "ArrowRight")
        setActiveIndex(i => (i! + 1) % images.length)
      if (e.key === "ArrowLeft")
        setActiveIndex(i => (i! - 1 + images.length) % images.length)
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, isMobile])

  /* TOUCH */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX

    if (Math.abs(diff) > 50) {
      setActiveIndex(i =>
        diff > 0
          ? (i! + 1) % images.length
          : (i! - 1 + images.length) % images.length
      )
    }

    touchStartX.current = null
  }

  return (
    <>
      <Header />

      <main className="bg-primary pt-32 pb-24">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <h1 className="font-serif text-5xl text-white mb-4">
            Timeless Moments
          </h1>
          <p className="text-white leading-relaxed">
            A visual journey through nature, celebrations, and quiet luxury.
          </p>
        </div>

        {/* INSTAX SCATTER GRID */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-4 md:gap-10">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group relative bg-white p-1 md:p-2 shadow-xl transition-transform duration-300 hover:scale-105 ${
                  scatterStyles[i % scatterStyles.length]
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* LIGHTBOX (UNCHANGED) */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="w-full h-full flex items-center justify-center"
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            <img
              src={images[activeIndex]}
              className={`${
                isMobile
                  ? "w-full h-auto"
                  : "max-w-[90vw] max-h-[90vh]"
              } object-contain`}
            />
          </div>

          {!isMobile && (
            <>
              <button
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + images.length) % images.length
                  )
                }
                className="absolute left-6 text-white"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % images.length)
                }
                className="absolute right-6 text-white"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
