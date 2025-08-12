import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { BtnGroup } from "../components/BtnGroup";
import iPadImg from "../assets/images/iPad.png";
import airLogo from "../assets/images/air.png";
import appleWatch from "../assets/images/apple_watch.png";
import appleVision from "../assets/images/vision_pro.png"
import macPro from "../assets/images/macbook_pro.png"
import airPodsPro from "../assets/images/airpods.png"
import appleMusic from "../assets/images/apple_music.png"

function GridCards() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col z-0 mb-4 transition-opacity duration-700 ease-in ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 ">
          <div className="bg-linear-to-b from-sky-300 to-slate-100 pt-13 text-center ">
            <div className="text-4xl font-bold flex justify-center">
              iPad
              <img
                src={airLogo}
                alt=""
                className="ml-2 max-w-[60px] h-7 w-full mt-2"
              />
            </div>

            <p className="text-xl font-normal">Power that's easy to carry.</p>
            <BtnGroup />
            <img
              src={iPadImg}
              alt="iPad"
              className="max-w-3xs md:max-w-[150px] xl:max-w-2xs w-full mx-auto pt-5 pb-5"
            />
          </div>
          <div className="bg-linear-to-b from-slate-300 to-slate-50 w-full pt-13 text-center">
            <div className="text-4xl font-bold flex justify-center">
              <FaApple className="mr-1" />
              WATCH
            </div>
            <p className="text-xl font-normal text-center">
              More than meets the time.
            </p>
            <BtnGroup />
            <img src={appleWatch} alt="" className="mx-auto w-full max-w-xs lg:max-w-md xl:max-w-2xl pt-5 pb-5 md:pb-0" />
          </div>
          <div className="bg-linear-to-b from-slate-100 to-stone-300 w-full pt-13 text-center">
            <div className="text-4xl font-bold flex justify-center">
              <FaApple className="mr-1" />
              Vision Pro
            </div>
            <p className="text-xl font-normal text-center">
              See. Hear. Feel. Beyond.
            </p>
            <BtnGroup />
            <img src={appleVision} alt="" className="mx-auto w-full max-w-2xs md:max-w-2xs lg:max-w-sm xl:max-w-lg mt-5 drop-shadow-2xl" />
          </div>
          <div className="bg-linear-to-b from-slate-100 to-sky-200 w-full pt-13 text-center">
            <div className="text-4xl font-bold flex justify-center">
              MacBook Pro
            </div>
            <p className="text-xl font-normal text-center">
              Performance without limits.
            </p>
            <BtnGroup />
            <img src={macPro} alt="" className="w-full mx-auto max-w-2xs pt-10 pb-5 md:pb-0 md:pt-20 md:max-w-xs lg:max-w-md xl:max-w-2xl drop-shadow-2xl" />
          </div>
          <div className="bg-linear-to-b from-gray-300 to-slate-50 w-full pt-13 text-center">
            <div className="text-4xl font-bold flex justify-center">
              AirPods 4
            </div>
            <p className="text-xl font-normal text-center">
              Your world. In high fidelity.
            </p>
            <BtnGroup />
            <img src={airPodsPro} alt="" className="w-full mx-auto max-w-2xs md:max-w-[220px] xl:max-w-sm drop-shadow-lg" />
          </div>
          <div className="bg-linear-to-b from-red-400 to-red-100 w-full pt-13 text-center">
            <div className="text-4xl font-bold flex justify-center text-white">
              <FaApple className="mr-1" />
              Music
            </div>
            <p className="text-xl font-normal text-center text-white">
              From classics to tomorrow.
            </p>
            <div className="text-sm md:text-sm flex flex-row justify-center gap-2 mt-3 font-normal ">
              <button className="border border-white text-white px-4 py-2 rounded-4xl hover:bg-red-500 hover:border-red-500 cursor-pointer">
                Subscribe Now
              </button>
            </div>
            <img src={appleMusic} alt="" className="mx-auto mt-3 w-full max-w-xs md:max-w-sm lg:max-w-2xl drop-shadow-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GridCards;
