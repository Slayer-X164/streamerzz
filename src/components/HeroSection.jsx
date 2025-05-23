import React from "react";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants/index";
const HeroSection = () => {
  return (
    <section className="text-neutral-200 pt-28 lg:pt-36  h-screen relative z-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center h-36">
        <div className="text-sm mb-4 border-slate-900 bg-slate-900/70 border-2 px-3 py-2 rounded-full ">
          {HERO_CONTENT.badgeText}
        </div>
        <h1 className="text-5xl mt-12 md:mt-0 md:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-indigo-50 via-indigo-200 to-gray-800 bg-clip-text text-transparent">
          The Ultimate <br /> Streaming Toolkit++
        </h1>
        <p className="mt-6  text-neutral-500 font-semibold max-w-2xl  text-xs md:text-sm ">
          {HERO_CONTENT.subHeading}
        </p>
        <div className="mt-6 space-x-4">
          <button className="relative mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1  font-medium text-neutral-200 backdrop-blur-3xl">
              {HERO_CONTENT.callToAction.primary}
            </span>
          </button>
          <a
            href="#"
            className="border  py-3 px-6 rounded-full text-neutral-100 bg-gradient-to-b from-gray-950 via-slate-950 to-slate-700"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </div>
        {/* brands */}
        <div className="flex mt-20 flex-wrap justify-center gap-6">
            {BRAND_LOGOS.map((logo,index)=>(
                <img src={logo.src} key={index} alt={logo.alt} className="h-8" />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
