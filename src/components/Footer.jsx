import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d={path} />
  </svg>
)

const socialPaths = [
  // Instagram
  'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.4.42.6.24 1 .53 1.5 1a4.1 4.1 0 0 1 1 1.5c.17.4.36 1.2.42 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.4a4.1 4.1 0 0 1-1 1.5 4.1 4.1 0 0 1-1.5 1c-.4.17-1.2.36-2.4.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.4-.42a4.1 4.1 0 0 1-1.5-1 4.1 4.1 0 0 1-1-1.5c-.17-.4-.36-1.2-.42-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.4a4.1 4.1 0 0 1 1-1.5 4.1 4.1 0 0 1 1.5-1c.4-.17 1.2-.36 2.4-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 12 18.6 6.7 6.7 0 0 0 12 5.3zm0 11.05A4.35 4.35 0 1 1 12 7.65a4.35 4.35 0 0 1 0 8.7zm6.9-11.3a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0z',
  // Facebook
  'M13.5 21v-7.7h2.58l.39-3h-2.97V8.3c0-.87.24-1.46 1.49-1.46h1.59V4.14C16.3 4.1 15.44 4 14.44 4c-2.1 0-3.54 1.28-3.54 3.63v2.67H8.3v3h2.6V21h2.6z',
  // LinkedIn
  'M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.45 20h-3.37v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17V20H9.4V8.5h3.24v1.57h.05a3.55 3.55 0 0 1 3.2-1.76c3.42 0 4.56 2.26 4.56 5.19V20z',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-px mx-auto max-w-7xl py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-xs">
            Premium dental care built around modern technology and a team that puts your comfort first.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socialPaths.map((path, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link (demo)"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
              >
                <SocialIcon path={path} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ['About Us', '/about'],
              ['Our Dentists', '/dentists'],
              ['Treatment Packages', '/packages'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} className="text-white/70 hover:text-white transition-colors">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <NavLink to={`/services/${s.slug}`} className="text-white/70 hover:text-white transition-colors">
                  {s.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-sky shrink-0" />
              <span>123 Demo Street, Example City (demo address)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sky shrink-0" />
              <a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky shrink-0" />
              <a href="mailto:hello@dentora-demo.com" className="hover:text-white">hello@dentora-demo.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Dentora Dental Clinic. Demo website, not a real clinic.</p>
          <p>Designed and built as a digital services demonstration.</p>
        </div>
      </div>
    </footer>
  )
}
