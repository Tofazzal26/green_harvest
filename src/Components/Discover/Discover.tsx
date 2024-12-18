"use client";
import { ArrowUpRight } from "lucide-react";

const Discover: React.FC = () => {
  return (
    <div className="my-10">
      <div className="relative md:w-full md:h-[270px] h-[400px] bg-cover bg-no-repeat bg-center bg-[url('/rice.jpg')] rounded-[30px]">
        <div className="bg-gray-900 absolute inset-0 rounded-[30px] bg-opacity-40">
          <div className="flex md:flex-row flex-col justify-between md:px-[80px] items-center md:translate-y-[60px]">
            <div className="flex md:flex-row flex-col items-center gap-2">
              <img src="/tree.png" alt="" />
              <h2 className="text-[30px] text-center md:text-start md:text-[50px] md:w-[600px] text-white md:leading-[60px]">
                We’re popular leader in agriculture market globally
              </h2>
            </div>
            <div>
              <button className="bg-white rounded-full px-8 gap-2 py-3 text-gray-600 flex items-center text-[20px]">
                Discover More <ArrowUpRight size={24} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
