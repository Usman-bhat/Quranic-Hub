"use client";

import React, { useState } from "react";
import Link from "next/link";
//import AlQuranulKarimSVG from "@/public/images/alquranul-karim.svg";
import QuranSvg from "@/components/images/alquranul-karim";
import surahs from "@/components/home/DataQuranSurah";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("0");
  const [ayahCount, setAyahCount] = useState("3");
  const handleDropdownChange = (event) => {
    const selectedSurah = surahs.find(
      (item) => item.id.toString() === event.target.value,
    );
    //console.log(selectedSurah.ayahs);
    setSelectedItem(event.target.value);
    setAyahCount(selectedSurah ? selectedSurah.ayahs : 3);
    //setSelectedItem(event.target.value);
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <div className="flex flex-col h-1/4 items-center justify-center bg-gray-900/75 text-white">
      <div className="w-full max-w-2xl p-4">
        <div className="flex items-center justify-center mb-2">
          <QuranSvg />
        </div>
        <div className="flex item-center justify-center bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <select
              value={selectedItem}
              onChange={handleDropdownChange}
              className="bg-white text-gray-900 px-2 py-2 rounded-l-lg border border-gray-300"
            >
              <option value="">Select Surah</option>
              {surahs.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.arabic} {item.name}
                </option>
              ))}
            </select>
            <select
              value={selectedNumber}
              onChange={handleNumberChange}
              className="bg-white text-gray-900 px-4 py-2 rounded-r-lg ml-2 border border-gray-300"
            >
              {Array.from({ length: ayahCount }, (_, index) => index + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ),
              )}
            </select>

            <Link
              href={{
                pathname: `/${selectedItem ? selectedItem : 1}`,
                query: { ayah: `${selectedNumber}` },
              }}
              scroll={false}
            >
              <p className="mx-2 py-2 px-2 text-gray-600 rounded-r-lg border border-gray-300">
                Go
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
