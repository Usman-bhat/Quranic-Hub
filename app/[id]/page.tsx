import { data } from "./data"; // Adjust the import path based on your project structure
import Navbar from "@/components/Navbar";
import SurahAerab from "./surahAerab";
import surahs from "@/components/home/DataQuranSurah";
import NextSurah from "@/components/Chapter/nextSurah";
import Footer from "@/components/Footer";
import GotoAyah from "@/components/Chapter/gotoAyah";
//import { useRouter } from "next/router";

// ... (your existing imports)
/*
export async function generateStaticParams() {
  return data.map((item) => ({
    id: item.id.toString(),
  }));
}*/
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
      <GotoAyah ayahs={ayahs} />
      <SurahAerab data={items} ayahs={ayahs} />
      <NextSurah currentSurah={id} />
      <Footer />
    </>
  );
}

export default ItemPage;
