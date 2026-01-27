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

const images = Object.values(imageModules).map(
    (mod: any) => mod.default
)

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const touchStartX = useRef<number | null>(null)

    /* ===============================
       SCREEN SIZE DETECTION
    ================================ */
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 500)
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    /* ===============================
       KEYBOARD CONTROLS (DESKTOP)
    ================================ */
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

    /* ===============================
       TOUCH (MOBILE SWIPE)
    ================================ */
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
                {/* PAGE TITLE */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-6">
                    <h1 className="font-serif text-5xl text-white mb-4">
                        Timeless Moments
                    </h1>
                    <p className="text-white leading-relaxed">
                        A visual journey through nature, celebrations, and quiet luxury.
                    </p>
                </div>

                {/* GALLERY GRID */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className="mb-4 w-full break-inside-avoid focus:outline-none"
                            >
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full rounded-lg md:rounded-xl shadow-sm hover:scale-[1.02] transition"
                                />
                            </button>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />

            {/* ===============================
          FULLSCREEN VIEWER
      ================================ */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
                    {/* CLOSE */}
                    <button
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-6 right-6 text-white"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    {/* IMAGE */}
                    <div
                        className="w-full h-full flex items-center justify-center"
                        onTouchStart={isMobile ? onTouchStart : undefined}
                        onTouchEnd={isMobile ? onTouchEnd : undefined}
                    >
                        <img
                            src={images[activeIndex]}
                            className={`${isMobile
                                    ? "w-full h-auto"
                                    : "max-w-[90vw] max-h-[90vh]"
                                } object-contain`}
                        />
                    </div>

                    {/* DESKTOP NAV */}
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
