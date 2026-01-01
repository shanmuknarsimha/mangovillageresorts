import { Phone, MapPin, Instagram, Youtube } from "lucide-react"
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="Mango Village Resorts"
              className="h-14 mb-4"
            />
            <p className="font-sans text-white/80 leading-relaxed text-sm max-w-xs">
              Where refined hospitality meets timeless, nature-driven
              experiences rooted in heritage and comfort.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 font-serif text-sm uppercase tracking-[0.18em]">
              {["Home", "Cottages", "Events", "Gallery", "About"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide uppercase">
              Connect
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li>
                <a
                  href="https://www.instagram.com/mangovillageresorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@MangoVillageResorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Youtube className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* MAP + CONTACT */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide uppercase">
              Contact us
            </h4>

            {/* CONTACT */}
            <a
              href="tel:+919010221616"
              className="flex items-center gap-3 mb-4 text-white/80 hover:text-gold transition-colors text-sm"
            >
              <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
              +91 90102 21616
            </a>

            <a
              href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13934.618267565585!2d83.051036!3d17.980604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bd70065329df9%3A0x66aa1328e36f35a2!2sMango%20Village%20Resorts!5e1!3m2!1sen!2sin!4v1767220291484!5m2!1sen!2sin"
              className="flex items-center gap-3 mb-4 text-white/80 hover:text-gold transition-colors text-sm"
            >
              <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
              Location
            </a>
            {/* EMBEDDED MAP */}
            <div className="mb-4 rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13934.618267565585!2d83.051036!3d17.980604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bd70065329df9%3A0x66aa1328e36f35a2!2sMango%20Village%20Resorts!5e1!3m2!1sen!2sin!4v1767220291484!5m2!1sen!2sin"
                className="w-full aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} Mango Village Resorts. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
