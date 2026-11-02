import { NavLink } from 'react-router-dom'
import { ShieldCheck, Clock, Award, Smartphone, Quote, ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../data/testimonials'

export function TrustBar() {
  const items = [
    { icon: Award, label: '14+ Years Combined Experience' },
    { icon: ShieldCheck, label: 'Modern, Sterile Equipment' },
    { icon: Clock, label: 'Flexible Appointment Hours' },
    { icon: Smartphone, label: 'Easy Online Booking' },
  ]
  return (
    <section className="relative -mt-10 sm:-mt-14 z-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="card grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 py-8">
            {items.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                </div>
                <p className="text-sm font-semibold text-navy leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Testimonials({ compact = false }) {
  return (
    <section className={`section-pad ${compact ? '!py-16' : ''} bg-cloud`}>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What our patients say"
          description="Illustrative sample testimonials created for this demonstration, not genuine patient reviews."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="card h-full p-7 flex flex-col">
                <Quote className="w-7 h-7 text-sky mb-4" strokeWidth={1.5} />
                <p className="text-sm text-ink-soft leading-relaxed grow">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-navy/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-sky flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-ink-soft">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-ink-soft/70 mt-8">
          Sample content for demonstration purposes only.
        </p>
      </div>
    </section>
  )
}

export function CTABanner() {
  return (
    <section className="section-pad !py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="container-px mx-auto max-w-5xl relative text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-[2.75rem] font-semibold text-white leading-[1.1] tracking-tight">
            Ready to meet your new dental team?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Book an appointment in a couple of minutes and take the first step toward a healthier, brighter smile.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink to="/booking" className="btn-primary">
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </NavLink>
            <NavLink to="/contact" className="btn-outline">
              Contact Us
            </NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
