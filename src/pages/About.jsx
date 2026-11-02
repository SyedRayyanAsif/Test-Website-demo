import { Target, HeartPulse, Cpu, Building2, Users2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import PhotoCard from '../components/ui/PhotoCard'
import { CTABanner } from '../components/Shared'

const values = [
  { icon: Target, title: 'Clarity First', text: 'We explain every option in plain language before any treatment begins, no surprises.' },
  { icon: HeartPulse, title: 'Patient Comfort', text: 'A calm environment and a team that takes the time to answer every question.' },
  { icon: Cpu, title: 'Modern Technology', text: 'Digital imaging and up to date clinical technique across every treatment room.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Dentora"
        title="A clinic built around how patients feel"
        description="Dentora Dental Clinic is a fictional demonstration brand created to showcase a premium clinic website."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <PhotoCard
              icon={Building2}
              label="Dentora Dental Clinic"
              caption="Illustrative imagery for this demo"
              accent="blue"
              iconClassName="w-14 h-14"
              className="aspect-[4/5]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Dentistry that respects your time and your comfort"
              align="left"
              className="!mx-0"
            />
            <p className="mt-6 text-ink-soft leading-relaxed">
              Dentora was imagined as a clinic where modern technology and a genuinely attentive team meet. This
              demonstration site shows how that idea could come to life online, from a first visit through to a
              complete smile transformation.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Every page on this site, from the team profiles to the gallery, uses clearly labelled sample content
              built to show what a real clinic's website could look and feel like.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Mission & Values"
            title="What guides every appointment"
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-8 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-100 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-blue-600" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow="Our Facilities" title="A calm, modern environment" align="left" className="!mx-0" />
            <p className="mt-6 text-ink-soft leading-relaxed">
              Treatment rooms are equipped with current digital imaging technology, and every instrument follows a
              strict sterilisation process between patients.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                <Users2 className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-navy font-semibold">A team of 4 specialists across core treatment areas</p>
            </div>
          </div>
          <Reveal direction="right" className="order-1 lg:order-2">
            <PhotoCard
              icon={Cpu}
              label="Modern Equipment & Technology"
              caption="Illustrative imagery for this demo"
              accent="mint"
              iconClassName="w-14 h-14"
              className="aspect-[4/5] lg:aspect-square"
            />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
