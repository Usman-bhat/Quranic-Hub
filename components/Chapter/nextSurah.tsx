// pages/index.js

import Link from "next/link";
import { useRouter } from "next/router";

export default function NextSurah({ currentSurah }) {
  const currentID = parseInt(currentSurah) || 0; // Extract the current ID from the query params

  return (
    <div className="flex m-4 justify-center">
      <Link
        className="w-1/2 justify-between flex flex-row p-4 m-2 hover:bg-gray-200 rounded text-white border-2"
        href={`/${Math.max(0, currentID - 1)}`}
      >
        <svg
          className="w-5 mr-2 align-right"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="justify-left">prev</span>
      </Link>
      <Link
        className="w-1/2 p-4 m-2 justify-between flex flex-row  hover:bg-gray-200 text-white rounded border-2"
        href={`/${currentID + 1}`}
      >
        <span className="">Next</span>
        <svg
          className="w-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
