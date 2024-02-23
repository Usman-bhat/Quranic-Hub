import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import SurahList from "@/components/home/SurahList";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Explore the Linguistic Depths of the Holy Quran with aerabUlQuran',
  description: 'Embark on a captivating journey through the linguistic labyrinth of the Holy Quran with "aerabUlQuran." Delve into the intricate world of Nahw analysis, where every word is a revelation. Uncover the beauty of Quranic syntax and Arabic grammar, as you explore the profound depths of linguistic structure within the sacred text.',
  keywords: ['Quranic grammar', 'Nahw analysis', 'Arabic grammar', 'Quranic linguistics', 'Quranic syntax', 'Morphological analysis', 'Quranic language', 'Arabic syntax', 'Nahw principles', 'Linguistic analysis', 'Morphological breakdown', 'Arabic morphology', 'Quranic grammar guide', 'Nahw concepts', 'Quranic linguistic structure', 'Nahw tutorials', 'Arabic language analysis', 'Quranic grammar study', 'Linguistic principles', 'Quranic grammar resources', 'Arabic syntax analysis', 'Nahw lessons', 'Quranic grammar explanations', 'Arabic grammar breakdown', 'Quranic linguistic analysis', 'Arabic grammar guide', 'Quranic grammar tutorials', 'Nahw fundamentals', 'Quranic grammar principles', 'Arabic syntax guide', 'Quranic grammar lessons', 'Arabic grammar tutorials', 'Quranic linguistic tutorials', 'Quranic grammar elucidation', 'Arabic syntax principles', 'Quranic linguistic resources', 'Nahw linguistic analysis', 'Quranic grammar fundamentals', 'Arabic grammar insights', 'Quranic grammar insights', 'Nahw explanations', 'Quranic syntax rules', 'Nahw breakdown', 'Nahw principles explained', 'Quranic linguistic insights', 'Quranic grammar lessons']
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
