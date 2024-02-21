import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-500 via-gray-400 to-orange-500">
        <h1 className="text-5xl font-bold text-gray-800 mb-10">About Us</h1>
        <p className="text-gray-700 text-center max-w-2xl">
          BAL About Welcome to QuranicHub, the online haven for seekers of
          Islamic wisdom and the profound teachings of the Quran. I am Mohammad
          Usman Bhat, the mind and heart behind this endeavor, and it is my
          privilege to guide you through the diverse realms of Islamic
          knowledge. At QuranicHub, our mission is rooted in a deep commitment
          to provide authentic and enriching content. From the melodious
          recitation (tilawat) of the Quran to insightful explanations (tafsir)
          in Urdu and Hindi, every video is crafted with meticulous care to
          bridge the timeless wisdom of the Quran with the linguistic nuances of
          our diverse audience. In addition to Quranic exploration, QuranicHub
          serves as a repository for the works of esteemed Islamic scholars.
          Bayans from scholars like Dr. Israr Ahmad resonate within our digital
          walls, offering profound insights and guidance for spiritual
          enrichment. But our mission extends beyond the Quranic realm. In a
          tribute to the great philosopher-poet Allama Iqbal, I have curated a
          comprehensive collection of his works, including both Urdu and Persian
          masterpieces. This online archive aims to disseminate Iqbal's profound
          thoughts and poetic brilliance across the vast expanse of the
          internet. QuranicHub is not just a website; it is a community, a
          virtual sanctuary where knowledge seekers and spiritual enthusiasts
          converge. By subscribing and engaging with our content, you become an
          integral part of this journey. Together, we amplify the voices of
          Islamic scholarship and ensure the enduring legacy of luminaries like
          Allama Iqbal. Thank you for joining us on this enlightening voyage.
          Subscribe, explore, and share in the wisdom that QuranicHub endeavors
          to spread across the digital landscape. Embrace the richness of
          Islamic teachings, and let us together weave a tapestry of
          understanding and enlightenment.
        </p>
        <hr className="w-1/2 mt-6 h-px bg-gray-300 dark:bg-gray-300" />
        <h1 className="text-5xl font-bold text-gray-800 my-10">
          About This App
        </h1>
        <p className="text-gray-700 text-center max-w-2xl mt-5 arabicFont">
          "إعراب القرآن" (I'rab al-Qur'an) delves into the grammatical
          intricacies of the Quranic Arabic language, offering profound insights
          into its structure and meaning. Authored by [Author's Name], this
          comprehensive guide provides a meticulous analysis of Quranic verses,
          aiding readers in understanding the linguistic nuances and syntactical
          arrangements within the sacred text. With clear explanations and
          examples, this book serves as an invaluable resource for students,
          scholars, and enthusiasts seeking a deeper comprehension of the
          Quran's profound message. Dive into the rich tapestry of Quranic
          grammar with "إعراب القرآن" and unlock the beauty and depth of its
          language.
        </p>
        <p className="text-gray-700 text-center max-w-2xl mt-5">
          Thank you for visiting our website. Please remember us in you Duas.{" "}
          <br />
          Quranichub Team
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
