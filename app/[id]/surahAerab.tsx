"use client";
import SurahCard from "@/components/Chapter/SurahCard";
import SizeChanger from "@/components/Chapter/SizeChanger";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SurahAerab({ data, ayahs }) {
  const [fontSize, setFontSize] = useState(30); // Default font size
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };
  const searchParams = useSearchParams();

  const ayahScroll = searchParams.get("ayah");
  //set it later
  const ayahCount = ayahs;

  if (ayahScroll) {
    console.log(ayahScroll);
    const element = document.getElementById(ayahScroll);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  return (
    <>
      <div className=" mt-6 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <SizeChanger
          onFontSizeChange={handleFontSizeChange}
          ayahCount={ayahCount}
        />
        {data.map((item, index) => (
          <div className="p-3" id={item.id} key={item.ayah}>
            <SurahCard
              ayah={item.ayah}
              surah={item.surah}
              aerab={item.aerab}
              size={fontSize}
              className="rtl mt-4" // Add RTL and font class
            />
            {index < data.length - 1 && (
              <div className="border-b w-full h-px  border-gray-800 dark:border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default SurahAerab;
