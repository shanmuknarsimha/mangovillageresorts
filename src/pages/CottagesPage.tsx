import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BedDouble, Users, Maximize, Eye } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import coplecottageimg from "../assets/gallery/cplstay.webp";
import csinterior from "../assets/gallery/csinterior.webp";
import tinyhomes from "../assets/gallery/tinyhomes.webp";
import premiumcottageimg from "../assets/gallery/lxryhomes.webp";
import newinterior from "../assets/gallery/newInterior.webp";
import lxryhomesitting from "../assets/gallery/lxryhomesitting.webp";
import lxryhomeblkny from "../assets/gallery/lxryhomeblkny.webp";
import premiumsuites from "../assets/gallery/lxrysuites.webp";
import canopybed from "../assets/gallery/canopybed.webp";
import vintagechairs from "../assets/gallery/vintagechairs.webp";

// Activity images
import pool from "../assets/gallery/pool.webp";
import campfire from "../assets/gallery/campfire.webp";
import billiards from "../assets/gallery/billiards.webp";
import turf from "../assets/gallery/Box-Cricket.webp";
import cinematic from "../assets/gallery/exp/cinematic.webp";
import grouppic from "../assets/gallery/grouppic.webp";
import { Crown, Landmark, Heart } from "lucide-react";

/* ICON MAP */
const categoryIcons: Record<string, JSX.Element> = {
    "Premium Cottages": <Crown className="w-4 h-4" />,
    "Vintage Cottages": <Landmark className="w-4 h-4" />,
    "Couple Cottages": <Heart className="w-4 h-4" />,
};


export default function Cottages() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const cottageCategories = [
        {
            name: "Premium Cottages",
            cottages: [
                {
                    name: "Premium Cottages",
                    subtitle: "Spacious & refined living",
                    images: [premiumcottageimg, newinterior, lxryhomesitting, lxryhomeblkny],
                    bedType: "King Size Bed",
                    guests: "4-6 Guests",
                    view: "Garden View",
                    area: "450 sq. m.",
                    features: ["Alphonso", "Banginapalli", "Rasalu", "Kobbarimamidi", "Suvarnareka"],
                },
            ],
        },
        {
            name: "Vintage Cottages",
            cottages: [
                {
                    name: "Vintage Cottages",
                    subtitle: "Elevated luxury experience",
                    images: [premiumsuites, canopybed, vintagechairs],
                    bedType: "Canopy Bed",
                    guests: "2-4 Guests",
                    view: "Nature View",
                    area: "380 sq. m.",
                    features: ["Brindavanam", "Gokulam", "Amrutham", "Madhuram"],
                },
            ],
        },
        {
            name: "Couple Cottages",
            cottages: [
                {
                    name: "Couple Cottages",
                    subtitle: "Private & intimate stay",
                    images: [tinyhomes, coplecottageimg, csinterior],
                    bedType: "Queen Size Bed",
                    guests: "2 Guests",
                    view: "Private Garden",
                    area: "280 sq. m.",
                    features: ["Romantic", "Private", "Nature-facing"],
                },
            ],
        },
    ];

    const activities = [
        { title: "Nature View", description: "Surrounded by greenery", image: cinematic },
        { title: "Camp Fire", description: "Cozy evenings under the stars", image: campfire },
        { title: "Indoor Games", description: "Billiards, board games & more", image: billiards },
        { title: "Turf / Sports", description: "Outdoor sports zone", image: turf },
    ];

    const currentCottage = cottageCategories[activeCategory].cottages[0];

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeCategory]);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === currentCottage.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? currentCottage.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section className="relative w-screen min-h-[60vh] aspect-[16/9] flex items-center justify-center">
                <img
                    src={newinterior}
                    alt="Events at Mango Village Resorts"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                <div className="relative z-10 text-center text-white px-6 animate-fade-in">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                        Wake Up Where
                    </h1>
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                        Time Feels Gentle
                    </h1>
                    <p className="font-sans text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                        Calm spaces, private gardens, and effortless comfort. This is arrival.
                    </p>
                </div>
            </section>

            {/* CATEGORY SLIDER */}
            <section className="bg-white py-6 pt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="w-full flex justify-center">
                        <div
                            className="relative grid rounded-full border border-gold/60 bg-white shadow-sm p-2"
                            style={{
                                gridTemplateColumns: `repeat(${cottageCategories.length}, minmax(0, 1fr))`,
                            }}
                        >
                            {/* SLIDING BACKGROUND CAPSULE */}
                            <div
                                className="absolute top-1 bottom-1 left-1 rounded-full border border-gold/60 bg-gold/5 transition-transform duration-300 ease-out"
                                style={{
                                    width: `calc((100% - 0.5rem) / ${cottageCategories.length})`,
                                    transform: `translateX(${activeCategory * 100}%)`,
                                }}
                            />

                            {/* BUTTONS */}
                            {cottageCategories.map((category, index) => {
                                const isActive = activeCategory === index;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveCategory(index)}
                                        className="
                relative z-10
                w-full
                flex items-center justify-center gap-2
                px-3 py-2
                font-serif text-md sm:text-base
                whitespace-nowrap
                transition-colors duration-300
              "
                                    >
                                        <span
                                            className={`hidden md:inline transition-colors duration-300 ${isActive ? "text-gold" : "text-gray-600"
                                                }`}
                                        >
                                            {categoryIcons[category.name]}
                                        </span>

                                        <span
                                            className={`transition-colors duration-300 ${isActive ? "text-gold" : "text-gray-800"
                                                }`}
                                        >
                                            <span className="hidden sm:inline">{category.name}</span>
                                            <span className="inline sm:hidden">
                                                {category.name.replace(" Cottages", "")}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* COTTAGE CARD SLIDER */}
            <section className="bg-white pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto md:px-6 lg:px-16">
                    <div className="bg-white md:rounded-3xl overflow-hidden md:border border-gray-200 md:shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0 md:p-4">
                            {/* LEFT - IMAGE SECTION */}
                            <div className="relative h-full md:min-h-[300px] lg:min-h-[400px]">
                                <img
                                    src={currentCottage.images[currentImageIndex]}
                                    alt={currentCottage.name}
                                    className="w-full h-full object-cover md:rounded-xl"
                                />
                            </div>

                            {/* RIGHT - DETAILS SECTION */}
                            <div className="px-6 md:px-0 flex flex-col md:flex-row justify-between min-h-0 overflow-hidden">
                                {/* IMAGE THUMBNAILS */}
                                <div className="flex flex-row md:flex-col gap-3 overflow-x-auto overflow-y-auto scrollbar-hide my-6 md:my-4 md:mx-3">
                                    {currentCottage.images.map((img, index) => {
                                        const isActive = index === currentImageIndex;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`relative flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-300
                                                        ${isActive
                                                        ? "border-gold scale-105"
                                                        : "border-gray-200 opacity-70 hover:opacity-100"
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-14 h-14 object-cover"
                                                />

                                                {isActive && (
                                                    <div className="absolute inset-0 ring-1 ring-gold rounded-lg pointer-events-none" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                                {/* DETAILS */}
                                <div className="flex flex-col h-full flex-grow min-w-0 md:py-2 justify-between">
                                    <div>
                                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight truncate">
                                            {currentCottage.name}
                                        </h2>

                                        <p
                                            className="text-gray-600 text-md sm:text-lg mb-0 max-h-10 overflow-hidden leading-tight"
                                            title={currentCottage.subtitle}
                                        >
                                            {currentCottage.subtitle}
                                        </p>
                                    </div>
                                    {/* FEATURES GRID */}
                                    <div className="grid grid-cols-2 gap-3 mt-1">
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-row gap-2 items-center">
                                                <BedDouble className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-500">Bed Type</p>
                                            </div>
                                            <p className="font-semibold text-md text-gray-800">{currentCottage.bedType}</p>
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-row gap-2 items-center">
                                                <Users className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-500">Capacity</p>
                                            </div>
                                            <p className="font-semibold text-md text-gray-800">{currentCottage.guests}</p>
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-row gap-2 items-center">
                                                <Eye className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-500">View</p>
                                            </div>
                                            <p className="font-semibold text-md text-gray-800">{currentCottage.view}</p>
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-row gap-2 items-center">
                                                <Maximize className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-500">Area</p>
                                            </div>
                                            <p className="font-semibold text-md text-gray-800">{currentCottage.area}</p>
                                        </div>
                                    </div>

                                    {/* COTTAGE NAMES */}
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Available Cottages:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {currentCottage.features.map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-0.5 bg-primary/10 text-primary text-sm rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA BUTTON */}
                                    <button
                                        data-testid="check-availability-btn"
                                        className="w-full bg-gold hover:bg-gold-dark text-white font-serif text-base py-3 rounded-full transition-all duration-300 shadow-md flex-none mt-4"
                                    >
                                        Check Availability
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES & EXPERIENCES */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                            Experiences & Activities
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Beyond your cottage, discover a world of leisure and adventure
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">

                        {/* SMALLER CARDS */}
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden group aspect-[9/16]"
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h4 className="font-serif text-lg font-bold mb-1">
                                        {activity.title}
                                    </h4>
                                    <p className="text-md text-white/90">{activity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}