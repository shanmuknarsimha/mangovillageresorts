import { useEffect, useState } from "react"

// AUTO-IMPORT ALL IMAGES
const imageModules = import.meta.glob(
  "../assets/gallery/hero/*.{jpg,jpeg,png,webp}",
  { eager: true }
)

const images = Object.values(imageModules).map(
  (mod: any) => mod.default
)

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [zoomOut, setZoomOut] = useState(false)

  useEffect(() => {
    if (!images.length) return

    // Zoom-out starts slightly after image loads
    const zoomTimer = setTimeout(() => {
      setZoomOut(true)
    }, 10)

    // Change image after full animation
    const slideTimer = setTimeout(() => {
      setZoomOut(false)
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // total duration per image

    return () => {
      clearTimeout(zoomTimer)
      clearTimeout(slideTimer)
    }
  }, [current])

  return (
    // <section id="home" className="relative lg:min-h-screen text-white flex items-center overflow-hidden">

    <section id="home" className="relative w-screen min-h-[60vh] lg:min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-[7000ms] ease-linear
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
              ${index === current && zoomOut ? "scale-100" : "scale-110"}
            `}
          />
        ))}
      </div>

      {/* SOFT DARK OVERLAY (OPTIONAL BUT RECOMMENDED) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl uppercase md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
            Rooted in Nature
          </h1>
          <h1 className="font-serif text-3xl uppercase md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
            Refined by Luxury
          </h1>
        </div>
      </div>

    </section>
  )
}
