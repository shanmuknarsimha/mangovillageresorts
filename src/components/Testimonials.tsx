import { useEffect, useRef, useState } from "react"

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const [paused, setPaused] = useState(false)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  // motion refs
  const positionRef = useRef(0)
  const velocityRef = useRef(0)
  const draggingRef = useRef(false)
  const lastXRef = useRef(0)
  const lastTimeRef = useRef(0)

  const speed = 0.1
  const friction = 0.95

  const videos = [
    { id: "luOpj8rrd7U" },
    { id: "qauaC2S0-38" },
    { id: "Moh_FEQ-68g" },
    { id: "KLgvZw7Ng7g" },
  ]

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    const animate = () => {
      const track = trackRef.current
      if (!track) return

      if (!paused && !draggingRef.current) {
        velocityRef.current -= speed
      }

      positionRef.current += velocityRef.current
      velocityRef.current *= friction

      if (Math.abs(velocityRef.current) < 0.01) {
        velocityRef.current = 0
      }

      const halfWidth = track.scrollWidth / 2
      if (Math.abs(positionRef.current) >= halfWidth) {
        positionRef.current = 0
      }

      track.style.transform = `translateX(${positionRef.current}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }

  }, [paused])

  /* ================= SWIPE ================= */
  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    setPaused(true)
    lastXRef.current = e.clientX
    lastTimeRef.current = performance.now()
    velocityRef.current = 0
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return

    const now = performance.now()
    const dx = e.clientX - lastXRef.current
    const dt = now - lastTimeRef.current || 16

    positionRef.current += dx
    velocityRef.current = (dx / dt) * 16

    lastXRef.current = e.clientX
    lastTimeRef.current = now
  }

  const onPointerUp = () => {
    draggingRef.current = false
  }

  /* ================= RESUME ONLY ON SCROLL ================= */
  useEffect(() => {
    if (!paused) return
    const resume = () => setPaused(false)
    window.addEventListener("scroll", resume, { once: true })
    return () => window.removeEventListener("scroll", resume)
  }, [paused])

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-serif mb-12">
          What Our Guests Say
        </h2>

        <div
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{ touchAction: "pan-y", willChange: "transform" }}
        >
          {[...videos, ...videos].map((video, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 rounded-2xl overflow-hidden bg-black shadow-lg"
            >
              <div className="aspect-[9/16] relative">

                {/* THUMBNAIL IMAGE */}
                {activeVideo !== i && (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />

                    {/* Play overlay */}
                    <button
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/40"
                      onClick={() => {
                        setActiveVideo(i)
                        setPaused(true)
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black text-xl">
                        ▶
                      </div>
                    </button>
                  </>
                )}

                {/* VIDEO */}
                {activeVideo === i && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
