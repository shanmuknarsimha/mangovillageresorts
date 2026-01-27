import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ["Home", "Cottages", "Events", "Gallery", "About"]

  /* -------- Scroll handling -------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 40)
    })

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navbarSolid = scrolled || open

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50 h-20">
        {navbarSolid && (
          <div className="absolute inset-0 bg-emerald-800/95 backdrop-blur-md shadow-md transition-all duration-500" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link to="/">
              <img
                src={logo}
                alt="Mango Village Resorts"
                className="h-14 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-[13px] font-serif uppercase font-medium tracking-[0.18em] text-white hover:text-[#d4af37] transition-colors"
                >
                  {item}
                </Link>
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
        </div>
      </header>

      {/* ================= MOBILE TOP SLIDE MENU ================= */}
      <div
        className={`fixed inset-x-0 top-0 z-30 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="absolute inset-0 bg-emerald-800/95 backdrop-blur-md shadow-lg" />

        <div className="relative z-10 pt-24 px-6 pb-8 flex flex-col gap-6">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white z-50"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white text-lg font-serif uppercase tracking-[0.15em]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-20"
        />
      )}
    </>
  )
}
