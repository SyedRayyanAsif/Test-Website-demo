import { useParams, NavLink, Navigate } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import PhotoCard from '../components/ui/PhotoCard'
import PageHero from '../components/PageHero'
import { accent } from '../components/ui/accents'
import { getServiceBySlug, services } from '../data/services'
import { CTABanner } from '../components/Shared'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const a = accent(service.accent)
  const Icon = service.icon
  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Dental Services" title={service.name} description={service.tagline} />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <NavLink to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to all services
          </NavLink>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <PhotoCard
                icon={Icon}
                label={service.name}
                caption="Illustrative imagery for this demo"
                accent={service.accent}
                iconClassName="w-14 h-14"
                className="aspect-[4/5] lg:aspect-square"
              />
            </Reveal>

            <div>
              <div className={`w-14 h-14 rounded-2xl ${a.soft} flex items-center justify-center mb-6`}>
                <Icon className="w-7 h-7" strokeWidth={1.7} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">About this treatment</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">{service.description}</p>

              <h3 className="mt-8 font-semibold text-navy">Key benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${a.text}`} strokeWidth={1.8} />
                    <span className="text-sm text-ink-soft leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <NavLink to="/booking" className="btn-primary mt-9">
                Book This Treatment <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-px mx-auto max-w-7xl">
          <h3 className="text-xl font-semibold text-navy mb-8">You may also be interested in</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => {
              const ra = accent(s.accent)
              const RIcon = s.icon
              return (
                <NavLink key={s.slug} to={`/services/${s.slug}`} className="card p-6 flex flex-col hover:-translate-y-1 transition-transform">
                  <div className={`w-11 h-11 rounded-xl ${ra.soft} flex items-center justify-center mb-4`}>
                    <RIcon className="w-5 h-5" strokeWidth={1.7} />
                  </div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-xs text-ink-soft mt-1.5">{s.tagline}</p>
                </NavLink>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
