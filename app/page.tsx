import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import SurahList from "@/components/home/SurahList";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Explore the Linguistic Depths of the Holy Quran with aerabUlQuran',
  description: 'Embark on a captivating journey through the linguistic labyrinth of the Holy Quran with "aerabUlQuran." Delve into the intricate world of Nahw analysis, where every word is a revelation. Uncover the beauty of Quranic syntax and Arabic grammar, as you explore the profound depths of linguistic structure within the sacred text.',
}
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SurahList />
      <Footer />
    </main>
  );
}
