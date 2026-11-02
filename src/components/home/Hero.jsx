import { NavLink } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Star, Smile } from 'lucide-react'
import { motion } from 'framer-motion'
import PhotoCard from '../ui/PhotoCard'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 sm:pt-40 sm:pb-36 overflow-hidden bg-cloud">
      <div className="absolute top-20 -right-24 w-[28rem] h-[28rem] bg-sky-100 rounded-full blur-3xl opacity-80" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span className="w-6 h-px bg-blue-600" /> Premium Dental Care
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-navy">
            A healthier smile, designed around you
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-lg">
            Dentora Dental Clinic combines modern technology, experienced dentists and a genuinely comfortable
            experience, from a routine cleaning to a complete smile transformation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <NavLink to="/booking" className="btn-primary">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </NavLink>
            <NavLink to="/services" className="btn-outline-dark">
              Explore Services
            </NavLink>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {['EM', 'MH', 'SA', 'DB'].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-navy text-white text-[11px] font-bold flex items-center justify-center ring-4 ring-cloud"
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-ink-soft mt-0.5">Trusted by patients across the city</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <PhotoCard
            icon={Smile}
            label="Dentora Dental Clinic"
            caption="Illustrative imagery for this demo"
            accent="blue"
            iconClassName="w-14 h-14"
            className="aspect-[4/5] shadow-[0_30px_70px_-20px_rgba(11,35,64,0.35)]"
          />

          <motion.div
            className="absolute -left-8 top-10 card px-5 py-4 flex items-center gap-3 animate-float-slow"
          >
            <div className="w-10 h-10 rounded-xl bg-mint/15 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-mint" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy">Next slot today</p>
              <p className="text-xs text-ink-soft">2:30 PM available</p>
            </div>
          </motion.div>

          <motion.div className="absolute -right-6 bottom-12 card px-5 py-4 animate-float-slower">
            <p className="text-2xl font-bold text-navy font-display">4.9<span className="text-sm text-ink-soft font-sans"> / 5</span></p>
            <p className="text-xs text-ink-soft">Average patient rating</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
