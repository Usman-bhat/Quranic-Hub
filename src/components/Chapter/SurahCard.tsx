"use client"
import React from 'react';

const SurahCard = ({ ayah, aerab, surah }) => {

  return (
    <div className="flex items-center p-4 m-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-right">
      <div  className="flex-1 font-normal text-gray-800 dark:text-gray-200 arabicFont rtl">
        <p className="text-lg font-semibold mb-4 rtl">{ayah}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="text-lg rtl">{aerab}</p>
      </div>
    </div>
  );
};

export default SurahCard;
