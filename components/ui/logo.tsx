import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block">
      <img src="/logo/dalogo_light.png" className='h-12'></img>
    </Link>
  )
}
