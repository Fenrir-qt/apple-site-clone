import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import GridCards from "./GridCards";
import Mac from "./Mac";
import Movies from "./Movies";

import iPhoneImg from "../assets/images/iPhones.png";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <>
      <Header />
      <div className="text-center text-sm p-3">
        <span className="text-blue-500 cursor-pointer hover:underline">Shop online</span> for free delivery. Call us at 1800-1651-0525 or visit <span className="text-blue-500 cursor-pointer hover:underline">support</span>.
      </div>
      <div
        className={`flex flex-col z-0 mb-4 transition-opacity duration-700 ease-in ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center pt-15 text-3xl md:text-4xl font-bold bg-slate-100 w-full">
          <div>iPhone 15</div>
          <div className="font-normal text-xl md:text-2xl p-3 md:p-5">
            All day power. All new performance.
          </div>

          <img
            src={iPhoneImg}
            alt="iPhone Hero"
            className="object-scale-down w-lg md:w-2xl mx-auto pb-5 md:pb-8 drop-shadow-2xl"
          />
          <div className="text-sm md:text-base font-normal flex flex-row gap-3 justify-center pb-10">
            <button className="border border-blue-500 bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
              Learn More
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-4xl hover:bg-blue-500 hover:text-white cursor-pointer">
              Shop iPhone
            </button>
          </div>
        </div>
      </div>
      <Mac />
      <GridCards />
      <Movies />
      <Footer />
    </>
  );
}

export default Home;
