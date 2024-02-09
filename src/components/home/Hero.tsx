"use client"






import React, { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(['Quran', 'Hadith', 'Tafsir', 'Fiqh', 'Sufism']);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col h-[33vh] items-center justify-center bg-gray-900/75 text-white">
      <div className="w-full max-w-2xl p-4">
        <div className="flex justify-center mb-4">
          <Image
            src="https://github.com/HASHIM-HAMEEM/Files-for-server/raw/main/Quran.svg"
            alt="Arabic calligraphy"
	    width={100}
            height={100}
            quality={100}
            className="h-auto max-w-full"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={query}
              placeholder="What do you want to read?"
              className="flex-grow bg-white text-gray-900 px-4 py-2 rounded-l-lg border border-gray-300"
              onChange={handleChange}
            />
            <button className="flex items-center bg-white text-gray-900 px-2 py-2 rounded-r-lg border border-gray-300" onClick={handleClick}>
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </button>
            {isOpen && (
              <div className="top-full left-0 w-full bg-white rounded-lg shadow-lg p-4 mt-2">
                {/* Map over the suggestions and render them as list items */}
                <ul>
                  {suggestions.map((suggestion) => (
                    <li key={suggestion}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
