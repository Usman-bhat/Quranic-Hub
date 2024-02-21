import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MoreApps = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen justify-center text-center bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">More Apps</h1>

          <div className="">
            <div className="bg-white rounded-lg shadow-md p-4">
              <a href="https://alamaiqbal.vercel.app">
                <h2 className="text-lg text-gray-800 font-semibold mb-2">
                  Iqbal{" "}
                </h2>
              </a>{" "}
              <p className="text-gray-600">
                Urdu and Farsi poetry of Alama Iqbal.
              </p>
              {/* Add more details or link to the app */}
            </div>

            {/* Add more app cards as needed */}
            <p className="text-gray-800 m-4 p-4">
              {" "}
              More apps comming soon Inshallah{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreApps;
