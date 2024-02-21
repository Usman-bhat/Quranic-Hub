"use client";
import Link from "next/link";
import { React, useState } from "react";
import { useRouter } from "next/navigation";

export default function GotoAyah({ ayahs }) {
  const router = useRouter();
  const [selectedNumber, setSelectedNumber] = useState("1");
  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
    router.push(`?ayah=${event.target.value}`);
  };
  return (
    <div className="fixed bg-gray-900  rounded h-16 w-full py-2 justify-center text-center">
      <span className="mr-4"> Go to Ayah</span>
      <select
        value={selectedNumber}
        onChange={handleChange}
        className="inline-flex w-1/4 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {Array.from({ length: ayahs }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      {/*<Link
        className="ml-4 boarder rounded-md"
        href={{ query: { ayah: selectedNumber ? selectedNumber : 1 } }}
      >
        Go
        </Link>*/}
    </div>
  );
}
