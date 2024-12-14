import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import HeaderStyle from "./HeaderStyle/HeaderStyle.module.css";

const Header: React.FC = () => {
  return (
    <div className=" py-3">
      <div className="md:w-[1780px]  mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center">
              <Image src={"/logotwo.png"} width={60} height={60} alt="logo" />
              <h2 className="text-[50px] mt-2">
                <span className="text-[#60a145]">Green</span>Harvest
              </h2>
            </div>
          </div>
          <div>
            <ul className="flex items-center text-gray-900 gap-8 mt-2 text-[18px]">
              <li
                className={`border-b-2 border-gray-800 pb-[2px] cursor-pointer`}
              >
                Home
              </li>
              <li
                className={`cursor-pointer pb-[2px] ${HeaderStyle.headerAnimation}`}
              >
                Pages
              </li>
              <li
                className={`cursor-pointer pb-[2px] ${HeaderStyle.headerAnimation}`}
              >
                Portfolio
              </li>
              <li
                className={`cursor-pointer pb-[2px] ${HeaderStyle.headerAnimation}`}
              >
                Blog
              </li>
              <li
                className={`cursor-pointer pb-[2px] ${HeaderStyle.headerAnimation}`}
              >
                Shop
              </li>
              <li>
                <ShoppingBag
                  className=" text-gray-700 cursor-pointer pb-[2px]"
                  size={24}
                />
              </li>
              <li>
                <Search
                  className=" text-gray-700 cursor-pointer pb-[2px]"
                  size={26}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
