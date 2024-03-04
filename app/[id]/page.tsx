import { data } from "./data"; // Adjust the import path based on your project structure
import Navbar from "@/components/Navbar";
import SurahAerab from "./surahAerab";
import surahs from "@/components/home/DataQuranSurah";
import NextSurah from "@/components/Chapter/nextSurah";
import Footer from "@/components/Footer";
import GotoAyah from "@/components/Chapter/gotoAyah";
import type { Metadata } from 'next'
import { Suspense } from 'react'

//import { useRouter } from "next/router";

// ... (your existing imports)

export async function generateStaticParams() {
  return surahs.map((item) => ({
    id: item.id.toString(),
  }));
}
export const metadata: Metadata = {
  title: 'AerabUlQuran',
  description: 'Embark on a captivating journey through the linguistic labyrinth of the Holy Quran with "aerabUlQuran." Delve into the intricate world of Nahw analysis, where every word is a revelation. Uncover the beauty of Quranic syntax and Arabic grammar, as you explore the profound depths of linguistic structure within the sacred text.',
  keywords: ['Quranic grammar', 'Nahw analysis', 'Arabic grammar', 'Quranic linguistics', 'Quranic syntax', 'Morphological analysis', 'Quranic language', 'Arabic syntax', 'Nahw principles', 'Linguistic analysis', 'Morphological breakdown', 'Arabic morphology', 'Quranic grammar guide', 'Nahw concepts', 'Quranic linguistic structure', 'Nahw tutorials', 'Arabic language analysis', 'Quranic grammar study', 'Linguistic principles', 'Quranic grammar resources']
}
async function getData(id) {
  const items = data.filter((item) => item.surah.toString() === id);
  return items;
}
async function ItemPage({ params }) {
  //const router = useRouter();
  const { id } = params;
  const currentSurah = surahs.find((item) => item.id.toString() === id);
  const ayahs = currentSurah?.ayahs;

  console.log(params);
  const items = await getData(id);

  return (
    <>
      <Navbar />
      <Suspense>
      <GotoAyah ayahs={ayahs} />
      <SurahAerab data={items} ayahs={ayahs} />
      <NextSurah currentSurah={id} />
      </Suspense>
      <Footer />
    </>
  );
}

export default ItemPage;
