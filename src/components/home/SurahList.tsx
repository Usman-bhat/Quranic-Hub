import React from 'react';
import Card from './Card';
import surahs, { Surah } from './DataQuranSurah';

const SurahList: React.FC = () => {
  return (
    <div className="m-4 p-2 bg-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {surahs.map((surah: Surah) => (
        <Card
          key={surah.id}
          number={surah.id}
          title={surah.name}
          subtitle="The Cattle"  // You can customize this subtitle as needed
          arabic={surah.arabic}
          ayahs={`${surah.ayahs} Ayahs`}
          className="w-full p-4"  // Adjusted width and added padding
        />
      ))}
    </div>
  );
};

export default SurahList;
