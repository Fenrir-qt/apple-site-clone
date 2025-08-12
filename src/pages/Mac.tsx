import { useEffect, useState } from "react";
import macImg from "../assets/images/macbook.png";

function Mac() {
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
        <div className="w-full bg-linear-to-b from-sky-200 to-slate-100 text-center">
          <div className=" font-bold pt-15 text-4xl md:text-5xl">MacBook Air</div>
          <div className="font-normal text-center">
            <p className="pt-3 pb-5 px-10 text-lg md:text-2xl">
              Performance meets elegance. Made for your masterpiece.
            </p>
          </div>
          <img src={macImg} alt="" className="w-xs md:w-3xl mx-auto drop-shadow-2xl mb-3" />
          <div className="text-sm md:text-base flex flex-row justify-center gap-3 mt-5 pb-8 ">
            <button className="border border-blue-500 bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
              Learn More
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 rounded-3xl">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mac;
