import Hero from '../components/home/Hero'
import { TrustBar, Testimonials, CTABanner } from '../components/Shared'
import FeaturedServices from '../components/home/FeaturedServices'
import WhyChooseUs from '../components/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
