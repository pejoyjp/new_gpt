import Image from 'next/image'
import { Noto_Sans } from 'next/font/google'
import Homepage from '@/components/homepage/Homepage'

const font = Noto_Sans({ subsets: ['latin'],weight:['300','400','700','200','500'] })

export default function Home() {
  return (
    <main className={`h-full ${font.className}`}>
      <Homepage/>
    </main>
  )
}
