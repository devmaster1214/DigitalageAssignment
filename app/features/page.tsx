export const metadata = {
  title: 'Features - Simple',
  description: 'Page description',
}

import Opportunity from '@/components/opportunity'
import DigitalOffer from '@/components/digitaloffer'
import Newsletter from '@/components/newsletterfeatures'
import LandingFeatures from '@/components/landingfeatures'

export default function Home() {
  return (
    <>
      <LandingFeatures />
      <Opportunity />
      <DigitalOffer />
      <Newsletter />
    </>
  )
}
