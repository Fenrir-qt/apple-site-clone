function BtnGroup() {
  return (
    <>
      <div className="text-sm md:text-sm flex flex-row justify-center gap-2 mt-3 font-normal ">
        <button className="border border-blue-500 bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
          Learn More
        </button>
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 rounded-3xl">
          Buy
        </button>
      </div>
    </>
  );
}

export { BtnGroup };