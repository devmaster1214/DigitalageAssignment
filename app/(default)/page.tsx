export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Difference from '@/components/difference'
import Newsletter from '@/components/newsletter'
import Landing from '@/components/landing'

export default function Home() {
  return (
    <>
      <Landing />
      <Difference />
      <Newsletter />
    </>
  )
}
