import { Navbar } from '@/components/Navbar'
import { Home } from '@/components/Home'
import { Over } from '@/components/Over'
import { GridLines } from '@/components/GridLines'
import { Portfolio } from '@/components/Portfolio'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Over />
        <Portfolio />
      </main>
      <GridLines />
    </>
  )
}
