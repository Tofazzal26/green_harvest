"use client";
import { ArrowUpRight, Clock, User } from "lucide-react";
import Image from "next/image";
import NewsStyle from "./NewsStyle/NewsStyle.module.css";

const NewsInsight: React.FC = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-[16px] md:text-[20px] text-gray-800">
          News Insight
        </h1>
        <h2 className="text-[30px] md:text-[55px]">News From GreenHarvest</h2>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-3 md:gap-6 mt-4 md:mt-10">
        <div>
          <div className={`${NewsStyle.imageParent} rounded-md cursor-pointer`}>
            <Image
              src="/news.png"
              alt="news"
              height={300}
              width={450}
              className={`rounded-md ${NewsStyle.imageAnimation}`}
            />
          </div>
          <div className="flex items-center gap-4 text-gray-600 mb-1 mt-3">
            <button className="flex items-center gap-2 hover:text-[#60a145] transition-all">
              <User /> <span className="mt-[6px]">GreenHarvest Admin</span>
            </button>
            <button className="flex items-center gap-2">
              <Clock /> <span className="mt-1">09/12/23 10:24 am</span>
            </button>
          </div>
          <h2 className="text-[20px] md:text-[24px] md:my-2 cursor-pointer md:w-[350px] hover:text-[#60a145] transition-all">
            Things I Wish I Had Known About Angular When I Started
          </h2>
          <button className="flex items-center gap-1 text-gray-600 hover:text-[#60a145] transition-all">
            Read More <ArrowUpRight size={21} />{" "}
          </button>
        </div>
        <div>
          <div className={`${NewsStyle.imageParent} rounded-md cursor-pointer`}>
            <Image
              src="/news2.png"
              alt="news"
              height={300}
              width={450}
              className={`rounded-md ${NewsStyle.imageAnimation}`}
            />
          </div>
          <div className="flex items-center gap-4 text-gray-600 mb-1 mt-3">
            <button className="flex items-center gap-2 hover:text-[#60a145] transition-all">
              <User /> <span className="mt-[6px]">Orgado Admin</span>
            </button>
            <button className="flex items-center gap-2">
              <Clock /> <span className="mt-1">09/12/23 11:24 am</span>
            </button>
          </div>
          <h2 className="text-[20px] md:text-[24px] md:my-2 md:w-[350px] cursor-pointer hover:text-[#60a145] transition-all">
            Unique Ideas for Healthy Food You Haven’t heard yet
          </h2>
          <button className="flex items-center gap-1 text-gray-600 hover:text-[#60a145] transition-all">
            Read More <ArrowUpRight size={21} />{" "}
          </button>
        </div>
        <div>
          <div className={`${NewsStyle.imageParent} rounded-md cursor-pointer`}>
            <Image
              src="/news3.png"
              alt="news"
              height={300}
              width={450}
              className={`rounded-md ${NewsStyle.imageAnimation}`}
            />
          </div>
          <div className="flex items-center gap-4 text-gray-600 mb-1 mt-3">
            <button className="flex items-center gap-2 hover:text-[#60a145] transition-all">
              <User /> <span className="mt-[6px]">John Smith</span>
            </button>
            <button className="flex items-center gap-2">
              <Clock /> <span className="mt-1">09/12/23 11:22 am</span>
            </button>
          </div>
          <h2 className="text-[20px] md:text-[24px] md:my-2 md:w-[350px] hover:text-[#60a145] transition-all cursor-pointer">
            Five Data-Loading Patterns To Boost Web Performance
          </h2>
          <button className="flex items-center gap-1 text-gray-600 hover:text-[#60a145] transition-all">
            Read More <ArrowUpRight size={21} />{" "}
          </button>
        </div>
        <div>
          <div className={`${NewsStyle.imageParent} rounded-md cursor-pointer`}>
            <Image
              src="/news4.png"
              alt="news"
              height={300}
              width={450}
              className={`rounded-md ${NewsStyle.imageAnimation}`}
            />
          </div>
          <div className="flex items-center gap-4 text-gray-600 mb-1 mt-3">
            <button className="flex items-center gap-2 hover:text-[#60a145] transition-all">
              <User /> <span className="mt-[6px]">Jennifer Lee</span>
            </button>
            <button className="flex items-center gap-2">
              <Clock /> <span className="mt-1">09/12/23 11:17 am</span>
            </button>
          </div>
          <h2 className="text-[20px] md:text-[24px] md:my-2 md:w-[350px] hover:text-[#60a145] transition-all">
            Agriculture encompasses crop and livestock production
          </h2>
          <button className="flex items-center gap-1 text-gray-600 hover:text-[#60a145] transition-all">
            Read More <ArrowUpRight size={21} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsInsight;
