import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import SurahList from "@/components/home/SurahList";
import Footer from "@/components/Footer";
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
