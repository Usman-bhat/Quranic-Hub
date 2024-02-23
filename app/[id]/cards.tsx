"use client";
import { data } from "./data"; // Adjust the import path based on your project structure
import SurahCard from "@/components/Chapter/SurahCard";
import SizeChanger from "@/components/Chapter/SizeChanger";

export async function Cards({ id }) {
  async function getData(id:string) {
    const items = data.filter((item) => item.surah.toString() === id);
    return items;
  }
  const items = await getData(id);
  const [fontSize, setFontSize] = useState(30); // Default font size
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <>
      <div className=" mt-2 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-500">
        <SizeChanger onFontSizeChange={handleFontSizeChange} />
        {items.map((item, index) => (
          <div key={item.ayah}>
            <SurahCard
              ayah={item.ayah}
              surah={item.surah}
              aerab={item.aerab}
              size={fontSize}
              className="rtl mt-4" // Add RTL and font class
            />
            {index < items.length - 1 && (
              <div className="border-b border-gray-300 dark:border-gray-700"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
