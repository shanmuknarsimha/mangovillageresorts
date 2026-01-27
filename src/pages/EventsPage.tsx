import { Users, Music, Utensils, Lightbulb } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import raindancewed from "../assets/gallery/exp/raindance.webp";
import stage from "../assets/gallery/stageb.webp";
import birthday from "../assets/gallery/birthdday.webp";
import grouppic from "../assets/gallery/grouppic.webp";
import dining from "../assets/gallery/diningo.webp";
import diningl from "../assets/gallery/diningl.webp";
import ritual from "../assets/gallery/ritual.webp";
import wed from "../assets/gallery/wed.webp";
import corporate from "../assets/gallery/corporate.webp";

export default function Events() {
    const eventTypes = [
        {
            title: "Weddings",
            description:
                "Create timeless memories with elegant ceremonies and receptions surrounded by nature's beauty. Our spacious lawns and premium services ensure your special day is perfect.",
            image: wed,
        },
        {
            title: "Corporate Retreats",
            description:
                "Elevate team performance with focused corporate events in a serene environment. Modern facilities combined with natural tranquility foster productivity and collaboration.",
            image: corporate,
        },
        {
            title: "Family Celebrations",
            description:
                "Celebrate life's precious moments with your loved ones in our welcoming resort. From anniversaries to reunions, we provide the perfect setting for family gatherings.",
            image: raindancewed,
        },
        {
            title: "Birthday Parties & Get-togethers",
            description:
                "Host unforgettable birthday celebrations and casual get-togethers with friends. Customizable packages and dedicated support make every occasion special.",
            image: birthday,
        },
    ];

    const amenities = [
        {
            icon: Users,
            title: "Spacious Lawns",
            description: "Open-air venues perfect for gatherings of any size",
            image: stage,
        },
        {
            icon: Utensils,
            title: "Catering Support",
            description: "Delicious cuisine tailored to your event needs",
            image: dining,
        },
        {
            icon: Music,
            title: "Audio & Lighting",
            description: "Professional sound and lighting setup available",
            image: diningl,
        },
        {
            icon: Lightbulb,
            title: "Decoration Assistance",
            description: "Expert team to bring your vision to life",
            image: ritual,
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section className="relative w-screen min-h-[60vh] aspect-[16/9] flex items-center justify-center">
                <img
                    src={birthday}
                    alt="Events at Mango Village Resorts"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                <div className="relative z-10 text-center text-white px-6 animate-fade-in">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                        Events at Mango Village Resorts
                    </h1>
                    <p className="font-sans text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                        Celebrate moments that matter
                    </p>
                </div>
            </section>

            {/* EVENT TYPES */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-24 md:space-y-32">
                    {eventTypes.map((event, index) => (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                                }`}
                        >
                            {/* IMAGE */}
                            <div
                                className={`relative rounded-2xl overflow-hidden shadow-2xl group ${index % 2 === 1 ? "md:col-start-2" : ""
                                    }`}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* TEXT */}
                            <div
                                className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
                            >
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                                    {event.title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* AMENITIES & SUPPORT */}
            <section className="bg-gray-50 py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                            Amenities & Support
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Everything you need to make your event seamless and memorable
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">

                        {/* SMALLER CARDS */}
                        {amenities.map((amenity, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden group aspect-[9/16]"
                            >
                                <img
                                    src={amenity.image}
                                    alt={amenity.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h4 className="font-serif text-lg font-bold mb-1">
                                        {amenity.title}
                                    </h4>
                                    <p className="text-md text-white/90">{amenity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* EVENTS CTA */}
            <section className="relative py-20 md:py-32">
                <img
                    src={grouppic}
                    alt="Plan your event"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Plan Your Event With Us
                    </h2>
                    <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                        Let our experienced team help you create an unforgettable experience for your guests
                    </p>
                    <a
                        href="tel:+919010221616"
                        data-testid="contact-us-btn"
                        className="inline-block bg-gold hover:bg-gold-dark text-white font-serif text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}