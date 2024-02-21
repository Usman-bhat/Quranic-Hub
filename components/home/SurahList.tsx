import React from "react";
import Card from "./Card";
import surahs, { Surah } from "./DataQuranSurah";

const SurahList: React.FC = () => {
  return (
    <>
      <div className="w-auto p-4 m-4 rtl iytem-center justify-center ">
        <Card
          key="0"
          number="0"
          title="Introduction"
          subtitle="The Introduction" // You can customize this subtitle as needed
          arabic="المقدمة"
          ayahs={`0`}
          className="m-8" // Adjusted width and added padding
        />
      </div>
      <div className="m-4 p-2 bg-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {surahs.map((surah: Surah) => (
          <Card
            key={surah.id}
            number={surah.id}
            title={surah.name}
            subtitle={``} // You can customize this subtitle as needed
            arabic={surah.arabic}
            ayahs={`${surah.ayahs} Ayahs`}
            className="w-full p-4" // Adjusted width and added padding
          />
        ))}
      </div>
    </>
  );
};

export default SurahList;
