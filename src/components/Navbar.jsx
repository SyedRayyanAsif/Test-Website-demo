import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/dentists', label: 'Dentists' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/90 backdrop-blur-lg shadow-[0_4px_24px_-8px_rgba(16,36,63,0.15)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <NavLink to="/" aria-label="Dentora home">
          <Logo />
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600 bg-sky-100' : 'text-ink-soft hover:text-navy hover:bg-cloud'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+10000000000" className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone className="w-4 h-4 text-blue-600" />
            +1 (000) 000-0000
          </a>
          <NavLink to="/booking" className="btn-primary text-sm py-2.5 px-5">
            Book Appointment
          </NavLink>
        </div>

        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-navy/10 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/5 shadow-xl">
          <ul className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium ${
                      isActive ? 'text-blue-600 bg-sky-100' : 'text-ink-soft hover:bg-cloud'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink to="/booking" className="btn-primary w-full text-sm py-3">
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
