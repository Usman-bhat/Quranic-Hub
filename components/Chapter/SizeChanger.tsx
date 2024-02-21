"use client";
import Link from "next/link";
import { React, useState } from "react";
export default function SizeChanger({ onFontSizeChange, ayahCount }) {
  const [selectedNumber, setSelectedNumber] = useState("1");
  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <>
      <div className="fixed">
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
          defaultChecked={false}
        />
        <label
          htmlFor="drawer-toggle"
          className="absolute m-2 top-0 inline-block p-4 transition-all duration-500 bg-gray-700 rounded-lg peer-checked:rotate-180 peer-checked:left-80"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3208 7.58152C11.521 7.58152 10.7393 7.81867 10.0743 8.26297C9.40938 8.70727 8.89111 9.33878 8.58507 10.0776C8.27903 10.8165 8.19896 11.6295 8.35497 12.4138C8.51099 13.1982 8.8961 13.9187 9.46159 14.4842C10.0271 15.0497 10.7476 15.4348 11.5319 15.5908C12.3163 15.7468 13.1293 15.6667 13.8681 15.3607C14.607 15.0546 15.2385 14.5364 15.6828 13.8714C16.1271 13.2065 16.3642 12.4247 16.3642 11.625C16.361 10.5536 15.934 9.52697 15.1764 8.76936C14.4188 8.01176 13.3922 7.58472 12.3208 7.58152ZM21.0506 11.625C21.0485 12.0028 21.0208 12.3801 20.9677 12.7541L23.4287 14.6809C23.5359 14.7694 23.6081 14.8931 23.6325 15.0299C23.6568 15.1668 23.6317 15.3078 23.5616 15.4279L21.2336 19.4471C21.1628 19.5661 21.0524 19.6563 20.9216 19.7019C20.7909 19.7475 20.6483 19.7455 20.5189 19.6963L17.6253 18.5338C17.0228 18.9978 16.3634 19.3828 15.6632 19.6796L15.2305 22.7516C15.2063 22.8892 15.1351 23.0142 15.029 23.1051C14.9229 23.196 14.7885 23.2472 14.6488 23.25H9.99273C9.85558 23.2473 9.72338 23.1982 9.61772 23.1108C9.51206 23.0233 9.43918 22.9026 9.41097 22.7683L8.97832 19.6963C8.2762 19.403 7.61635 19.0173 7.01622 18.5495L4.12261 19.712C3.99326 19.7612 3.85069 19.7632 3.71998 19.7178C3.58926 19.6723 3.47877 19.5822 3.40792 19.4633L1.07989 15.4446C1.00981 15.3245 0.984709 15.1835 1.00906 15.0466C1.03341 14.9098 1.10563 14.786 1.21282 14.6975L3.67378 12.7708C3.62129 12.3911 3.5936 12.0083 3.59089 11.625C3.59299 11.2472 3.62069 10.8699 3.67378 10.4959L1.21282 8.56914C1.10563 8.48064 1.03341 8.35691 1.00906 8.22006C0.984709 8.0832 1.00981 7.94215 1.07989 7.82211L3.40792 3.80289C3.47869 3.68391 3.58915 3.59369 3.71987 3.54812C3.8506 3.50254 3.9932 3.50452 4.12261 3.55371L7.01622 4.71621C7.61876 4.25223 8.27813 3.86717 8.97832 3.57039L9.41097 0.498359C9.43518 0.360754 9.50643 0.235828 9.61254 0.144931C9.71865 0.0540328 9.85303 0.00280453 9.99273 0H14.6488C14.7859 0.00266947 14.9181 0.0517521 15.0238 0.139235C15.1295 0.226719 15.2023 0.347435 15.2305 0.481679L15.6632 3.55371C16.3662 3.84685 17.0269 4.23253 17.6278 4.70054L20.5189 3.53804C20.6483 3.48881 20.7908 3.48675 20.9215 3.53223C21.0522 3.57772 21.1627 3.66783 21.2336 3.78672L23.5616 7.80593C23.6317 7.92598 23.6568 8.06703 23.6325 8.20388C23.6081 8.34073 23.5359 8.46447 23.4287 8.55297L20.9677 10.4797C21.0202 10.8593 21.0479 11.2418 21.0506 11.625Z"
              fill="currentColor"
            />
          </svg>
        </label>
        <div className="fixed mt-4 top-0 border rounded-lg left-0 z-50 w-80 h-1/3 transition-all duration-500 transform -translate-x-full bg-gray-800 shadow-lg peer-checked:translate-x-0">
          <div className="px-6 py-4 flex flex-col justify-center text-center">
            <h2 className="w-full text-lg font-semibold mt-6">
              Change font Size
            </h2>
            <div className="flex bg-transparent items-center justify-left p-2 w-full">
              <button
                onClick={() => onFontSizeChange(20)}
                className="mr-2 bg-gray-500 text-white hover:bg-gray-400 py-2 font-bold px-4 rounded"
              >
                Small
              </button>
              <div className="divide-y-2 divide-blue-500 divide-dashed my-2" />
              <button
                onClick={() => onFontSizeChange(30)}
                className="mr-2 bg-gray-500 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
              >
                Medium
              </button>
              <div className="divide-y-2 divide-gray-500 divide-dashed my-2" />
              <button
                onClick={() => onFontSizeChange(50)}
                className="bg-gray-500 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
              >
                Large
              </button>
            </div>
          </div>
          <div className="m-2 p-2 justify-center text-center">
            <select
              value={selectedNumber}
              onChange={handleChange}
              className="px-4 py-2 text-gray-800"
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
              className="ml-4 boarder rounded-md"
              href={{ query: { ayah: selectedNumber ? selectedNumber : 1 } }}
            >
              Go
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
