import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import { TravelCard } from '@/components/TravelCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard></TravelCard>
    </main>
  )
}
