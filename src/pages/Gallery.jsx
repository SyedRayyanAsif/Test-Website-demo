import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import PhotoCard from '../components/ui/PhotoCard'
import { gallery } from '../data/gallery'
import { CTABanner } from '../components/Shared'

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside Dentora Dental Clinic"
        description="A look at the clinic environment, equipment and team. Illustrative imagery created for this demonstration."
      />
      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={(i % 6) * 0.06} className="mb-6 break-inside-avoid">
              <PhotoCard
                icon={g.icon}
                label={g.label}
                caption={g.category}
                accent={g.accent}
                pattern={i % 2 === 0 ? 'dots' : 'lines'}
                className={i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}
              />
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-ink-soft mt-10">
          All gallery imagery is illustrative, created for this demonstration, not photographs of a real clinic.
        </p>
      </section>
      <CTABanner />
    </>
  )
}
