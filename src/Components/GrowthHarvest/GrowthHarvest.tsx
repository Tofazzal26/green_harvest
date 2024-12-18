"use client";
import { Fence, Leaf } from "lucide-react";
import Image from "next/image";

const GrowthHarvest: React.FC = () => {
  return (
    <div className="my-10">
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-[90px]">
        <div>
          <div className="relative">
            <Image
              src="/service.png"
              alt=""
              width={700}
              height={640}
              className="rounded-[30px]"
            />
            <div className="absolute bg-white bottom-0 right-0 rounded-tl-[20px] w-[310px] h-[220px] md:block hidden">
              <div className="bg-[#eddd5e] rounded-[20px]  ml-8 mt-8 p-8">
                <div className="flex justify-center items-center flex-col">
                  <h2 className="text-[70px] text-[#404a3d] font-bold">
                    *435+
                  </h2>
                  <h2 className="text-[#666666]">Growth Tons' of Harvest</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-0 ml-8">
          <button className="bg-[#60a145] flex hover:bg-[#518a38] transition-all text-base rounded-full pt-[6px] pb-1 items-start px-6 gap-1 text-white">
            {" "}
            <Leaf size={20} strokeWidth={2} /> who we are
          </button>
          <h2 className="text-[30px] md:text-[55px] md:w-[500px] md:leading-[70px] mt-2">
            Currently we are growing and selling organic food
          </h2>
          <p className="text-[16px] w-[450px] mt-2 md:mt-4 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <div className="flex items-center md:flex-row flex-col justify-between md:mt-8">
            <div>
              <Fence
                size={70}
                strokeWidth={1}
                color="#527d4a"
                className="hover:scale-x-105 transition-all"
              />
              {/* <Image src={"/gate.png"} width={100} height={110} alt="gate" /> */}
              <h2 className="text-[20px] md:text-[25px] mt-2 md:mt-5">
                Eco Farms Worldwide
              </h2>
              <p className="text-[16px]  text-gray-600 md:w-[200px]">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
            <div>
              <Image
                src={"/machine.png"}
                width={90}
                height={90}
                alt="gate"
                className="hover:scale-y-105 transition-all"
              />
              <h2 className="text-[20px] md:text-[25px] mt-2 md:mt-4">
                Special Equipment
              </h2>
              <p className="text-[16px]  text-gray-600 md:w-[200px]">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthHarvest;
