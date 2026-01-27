import { Link } from "react-router-dom";
import { TreePine, Home, Users, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import countryside from "../assets/gallery/exp/birthdday.webp";
import hospitality from "../assets/gallery/cottages1.webp";
import lxryhomes from "../assets/gallery/newInterior.webp";
import pool from "../assets/gallery/grouppic.webp";
import logo from "../assets/logo.png"

export default function About() {
    const highlights = [
        {
            icon: TreePine,
            title: "Nature-Friendly Environment",
            description: "Surrounded by greenery and serenity",
            image: hospitality,
        },
        {
            icon: Home,
            title: "Spacious Luxury Cottages",
            description: "Comfortable, private, and elegantly designed",
            image: lxryhomes,
        },
        {
            icon: Users,
            title: "Ideal for Events & Getaways",
            description: "Perfect for celebrations and retreats",
            image: countryside,
        },
        {
            icon: Sparkles,
            title: "Activities for All Ages",
            description: "Fun experiences for every age",
            image: pool,
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-screen w-auto flex items-center justify-center">
                <img
                    src={countryside}
                    alt="About Mango Village Resorts"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
                <div className="relative z-10 text-center text-white px-6 animate-fade-in">
                    <div className="max-w-5xl mx-auto">

                        {/* LOGO + TITLE */}
                        <div className="text-center mb-6">
                            <img
                                src={logo}
                                alt="Mango Village Resorts"
                                className="mx-auto mb-2 w-auto h-32 opacity-90"
                            />

                            <div className="w-16 h-px bg-gold mx-auto mb-2" />

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Our Story
                            </h2>
                        </div>

                        {/* STORY CONTENT */}
                        <div className="space-y-8 text-lg leading-relaxed max-w-3xl mx-auto">
                            <p>
                                Mango Village Resorts was born from a vision to create a sanctuary where
                                guests can reconnect with nature while enjoying the finest comforts of
                                modern hospitality. Nestled in lush countryside, our resort offers a
                                tranquil retreat from the pace of everyday life.
                            </p>

                            {/* <p>
                                We believe true relaxation comes from immersive natural beauty, genuine
                                warmth, and thoughtful design. Every corner of the resort is crafted to
                                inspire peace, rejuvenation, and meaningful moments together.
                            </p>

                            <p>
                                Whether it’s a romantic escape, a family holiday, or a special
                                celebration, Mango Village Resorts welcomes you with the promise of
                                unforgettable memories.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS GRID */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover what makes Mango Village Resorts the perfect destination
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">

                        {/* SMALLER CARDS */}
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden group aspect-[9/16]"
                            >
                                <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h4 className="font-serif text-lg font-bold mb-1">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-md text-white/90">{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="bg-gray-50 py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                                The Mango Village Experience
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    At Mango Village Resorts, we don't just provide accommodation—we
                                    craft experiences. From the moment you arrive, you'll be enveloped
                                    in an atmosphere of warmth, elegance, and natural tranquility.
                                </p>
                                <p>
                                    Our dedicated team is committed to ensuring every aspect of your
                                    stay exceeds expectations, whether you're here for leisure,
                                    celebration, or corporate purposes.
                                </p>
                                <p>
                                    We take pride in our attention to detail, genuine hospitality, and
                                    commitment to creating moments that linger in your heart long after
                                    you've departed.
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={pool}
                                alt="Swimming Pool"
                                className="w-full aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT CTA */}
            <section className="relative py-20 md:py-32">
                <img
                    src={lxryhomes}
                    alt="Visit us"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Visit. Relax. Celebrate.
                    </h2>
                    <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                        Experience the perfect blend of nature, luxury, and hospitality at Mango Village Resorts
                    </p>
                    <Link
                        to="/cottages"
                        data-testid="explore-cottages-btn"
                        className="inline-block bg-gold hover:bg-gold-dark text-white font-serif text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                        Explore Our Cottages
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}