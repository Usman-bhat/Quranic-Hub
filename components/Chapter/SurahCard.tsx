"use client";
import React from "react";

const SurahCard = ({ ayah, aerab, surah, size }) => {
  const formattedAerab = aerab.replace(/⬤/g, "۩");
  // const formattedAyah = ayah.replace(/(/g, "۝\u066D١");

  //const formattedAerab = aerab.split("⬤").join("\n\n");

  return (
    <div className="flex flex-col rounded-lg items-center p-4 m-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-right">
      <p className="bg-gray-700 rounded-lg p-6 text-[40px] font-semibold quranFont mb-4 rtl">
        {ayah}
      </p>
      <hr className="  h-px my-8 bg-gray-800 dark:bg-gray-300" />
      <p className="arabicFont" style={{ fontSize: `${size}px` }}>
        {formattedAerab}
      </p>
    </div>
  );
};

export default SurahCard;
