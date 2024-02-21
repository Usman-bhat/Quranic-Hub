import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pb-16 py-8 ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
          {" "}
          <h2 className="text-lg font-bold mb-2">Support</h2>{" "}
          <ul className="list-reset space-y-2">
            <li>
              <a href="about" className="text-gray-400 hover:text-gray-200">
                About
              </a>
            </li>{" "}
            <li>
              <a href="/moreapps" className="text-gray-400 hover:text-gray-200">
                More Apps
              </a>
            </li>
          </ul>{" "}
        </div>{" "}
        <div className="sm:w-1/4 text-center">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>{" "}
          <ul className="list-reset space-y-2">
            <li>
              <a
                href="https://youtube.com/@QuranicHub?si=mYJwp38nFVoTmkK_"
                className="text-gray-400 hover:text-gray-200"
              >
                Youtube
              </a>
            </li>{" "}
            <li>
              <a
                href="https://m.facebook.com/quranic.hub"
                className="text-gray-400 hover:text-gray-200"
              >
                Facebook
              </a>
            </li>{" "}
            <li>
              <a
                href="https://www.instagram.com/the_quranic_hub/"
                className="text-gray-400 hover:text-gray-200"
              >
                Instagram
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
      <div className="container mx-auto py-4 text-center text-gray-400">
        &copy; 2024{" "}
        <a className="text-blue-800" href="https://quranichub.blogspot.com/">
          {" "}
          QuranicHub
        </a>
        . All rights reserved.{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
