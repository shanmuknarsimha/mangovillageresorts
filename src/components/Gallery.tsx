import { useState, useRef, useEffect } from "react"

const imageModules = import.meta.glob(
    "../assets/gallery/exp/*.{jpg,jpeg,png,webp}",
    { eager: true }
)

const images = Object.values(imageModules).map((mod: any) => mod.default)

export default function Gallery() {
    const total = images.length

    const [index, setIndex] = useState(0)
    const [exiting, setExiting] = useState(false)
    const [isSmall, setIsSmall] = useState(false)
    const [orientationMap, setOrientationMap] = useState<Record<number, string>>({})

    const touchStartX = useRef<number | null>(null)
    const wheelLock = useRef(false)

    /* =========================
       SCREEN SIZE
    ========================== */
    useEffect(() => {
        const update = () => setIsSmall(window.innerWidth < 640)
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    /* =========================
       CORE MOVE LOGIC
    ========================== */
    const moveBy = (steps: number) => {
        if (exiting || steps === 0) return

        setExiting(true)
        setTimeout(() => {
            setIndex(i => (i + steps + total) % total)
            setExiting(false)
        }, 320)
    }

    /* =========================
       TOUCH (SMALL)
    ========================== */
    const onTouchStart = (e: React.TouchEvent) => {
        if (!isSmall) return
        touchStartX.current = e.touches[0].clientX
    }

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isSmall || exiting || touchStartX.current === null) return
        const diff = touchStartX.current - e.touches[0].clientX

        if (diff > 40) {
            moveBy(1)
            touchStartX.current = null
        } else if (diff < -40) {
            moveBy(-1)
            touchStartX.current = null
        }
    }

    /* =========================
       WHEEL (DESKTOP)
    ========================== */
    const onWheel = (e: React.WheelEvent) => {
        if (isSmall || exiting || wheelLock.current) return
        if (Math.abs(e.deltaX) < 20) return

        wheelLock.current = true
        moveBy(e.deltaX > 0 ? 1 : -1)

        setTimeout(() => {
            wheelLock.current = false
        }, 420)
    }

    /* =========================
       KEYBOARD
    ========================== */
    useEffect(() => {
        if (isSmall) return

        const onKey = (e: KeyboardEvent) => {
            if (exiting) return
            if (e.key === "ArrowRight") moveBy(1)
            if (e.key === "ArrowLeft") moveBy(-1)
        }

        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [isSmall, exiting])

    const getIndex = (offset: number) =>
        (index + offset + total) % total

    return (
        <section id="gallery" className="bg-stone-50 pt-24 overflow-hidden">
            {/* Heading */}
            <div className="text-center max-w-5xl mx-auto">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-primary mb-4">
                    Timeless Moments
                </h2>

                <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed px-8">
                    Wander through scenes of quiet luxury — sunlit courtyards, heritage-inspired architecture, lush gardens, and serene retreats where nature and nostalgia exist in perfect harmony.
                </p>
            </div>
            <div
                className="relative h-[420px] flex items-center justify-center"
                style={{ perspective: "1200px" }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onWheel={onWheel}
            >
                {[-2, -1, 0, 1, 2].map(offset => {
                    const itemIndex = getIndex(offset)
                    const isActive = offset === 0
                    const opacity = Math.max(0.25, 1 - Math.abs(offset) * 0.15)

                    const orientation = orientationMap[itemIndex] ?? "square"

                    const aspectRatio =
                        orientation === "landscape"
                            ? "16 / 9"
                            : orientation === "portrait"
                                ? "9 / 16"
                                : "1 / 1"

                    const sizeStyle =
                        orientation === "landscape"
                            ? { width: "min(65vw, 25rem)" }
                            : { height: "max(300px)" }

                    return (
                        <div
                            key={itemIndex}
                            className="absolute flex items-center justify-center transition-transform duration-300 ease-out"
                            style={{
                                ...sizeStyle,
                                aspectRatio,
                                transform: `
                  translateX(${offset * 220}px)
                  rotateY(${offset * -35}deg)
                  translateZ(${isActive ? 120 : 40}px)
                  scale(${isActive ? 1.2 : 0.95})
                `,
                                zIndex: 100 - Math.abs(offset),
                                opacity,
                            }}
                        >
                            <img
                                src={images[itemIndex]}
                                alt=""
                                onLoad={(e) => {
                                    const { naturalWidth, naturalHeight } = e.currentTarget
                                    setOrientationMap(prev => {
                                        const value =
                                            naturalWidth > naturalHeight
                                                ? "landscape"
                                                : naturalHeight > naturalWidth
                                                    ? "portrait"
                                                    : "square"
                                        if (prev[itemIndex] === value) return prev
                                        return { ...prev, [itemIndex]: value }
                                    })
                                }}
                                onClick={() => {
                                    if (isSmall) return
                                    moveBy(offset)
                                }}
                                className={`w-full h-full rounded-xl object-cover select-none transition-transform duration-300 ease-out ${!isSmall && offset !== 0 ? "cursor-pointer" : ""
                                    }`}
                                draggable={false}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
