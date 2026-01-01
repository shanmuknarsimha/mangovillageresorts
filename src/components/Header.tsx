import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "Cottages", "Events", "Gallery", "About"]

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-emerald-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 h-20 flex items-center justify-between">

          {/* LOGO */}
          <img
            src={logo}
            alt="Mango Village Resorts"
            className="h-16 w-auto"
          />

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-[13px]
                  font-serif
                  uppercase
                  font-medium
                  tracking-[0.18em]
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#d4af37]
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-emerald-900 z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
          <img
            src={logo}
            alt="Mango Village Resorts"
            className="h-12"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* SIDEBAR NAV */}
        <nav className="flex flex-col px-6 pt-10 gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                text-lg
                font-serif
                uppercase
                font-semibold
                tracking-[0.14em]
                text-white
                transition-colors
                duration-300
                hover:text-[#d4af37]
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
