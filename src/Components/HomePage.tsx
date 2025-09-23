import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className="h-[100vb]">
      <div className="grid grid-cols-2 grid-rows-4 w-[99%] h-[85%] mt-[9%]">
        {/* Grid 1 */}
        <div className="row-span-3 relative p-10 pb-12 ">
          <h2 className="font-light text-Blacky text-6xl">Profiessonal</h2>
          <h2 className="font-bold text-5xl">Fitness Workouts!</h2>
          <h2 className="font-light text-Blacky text-6xl ">
            <span className="font-bold">For</span> Everyone.
          </h2>
          <p className="text-Assend my-4 text-[15px]">
            you can start fitness every day through{" "}
            <span className="text-Blacky font-bold">the programs </span>that we
            make for you at home.
            <span className="text-Blacky font-bold">
              without any trouble
            </span>{" "}
            just start Right now
          </p>
          <div className="flex justify-start gap-10 items-center">
            <a
              href="@"
              className="p-3 px-8 text-Whitey font-bold tracking-wider bg-blue-500 rounded-xl"
            >
              Get started
            </a>
            <a
              href="@"
              className="p-3 px-8 text-Blacky border-2 border-Blacky font-bold tracking-wider bg-Whitey rounded-xl"
            >
              learn more
            </a>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="row-span-3 p-10 bg-gray-200 relative border-l-2 border-b-2 border-Assend ">
          <Image src={`/Fitness.jpg`} alt="" fill className="object-cover" />
        </div>
        {/* Grid 3 */}
        <div className="row-span-3 p-10 justify-center items-center flex flex-col ">
          <h2 className="my-1 text-3xl ">187k</h2>
          <p className="text-md text-Assend">Active custemers in the world</p>
        </div>
        {/* Grid 4 */}
        <div className="row-start-4 p-7 bg-gray-100 flex justify-center items-center w-full border-r-2 border-t-2 border-AssendFade ">
          <div className="flex flex-col justify-center items-center border-r-1 p-3 border-BlackyFade w-1/3">
            <h2 className="font-extrabold text-lg text-Blacky">12 years</h2>
            <p className="text-sm font-light text-Assend">experience</p>
          </div>
          <div className="flex flex-col justify-center items-center border-r-1 p-3 border-BlackyFade w-1/3">
            <h2 className="font-extrabold text-lg text-Blacky">+87</h2>
            <p className="text-sm font-light text-Assend">expert tainers</p>
          </div>
          <div className="flex flex-col justify-center items-center  p-3 w-1/3">
            <h2 className="font-extrabold text-lg text-Blacky">432</h2>
            <p className="text-sm font-light text-Assend">classes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
