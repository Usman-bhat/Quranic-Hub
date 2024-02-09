
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ number, title, subtitle, arabic, ayahs }) {
  return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-between border-2 border-white">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white transform rounded-sm rotate-45 flex items-center justify-center text-gray-800 font-bold text-2xl">
            <span className="transform -rotate-45">{number}</span>
          </div>
        </div>
        <div className="flex-1 ml-4">
	  <Link href={`/${number}`}>
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <p className="text-gray-300 text-sm">{subtitle}</p>
          </Link>
        </div>
        <div className="flex-shrink-0">
          <p className="text-white text-4xl surahname">{arabic}</p>
          <p className="text-gray-300 text-sm mt-2">{ayahs}</p>
        </div>
   
    </div>
  );
}
