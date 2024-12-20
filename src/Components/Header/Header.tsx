"use client";
import { Menu, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import HeaderStyle from "./HeaderStyle/HeaderStyle.module.css";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="py-4">
      <div className="md:w-[1780px] w-[380px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src={"/logotwo.png"} width={50} height={50} alt="logo" />
              <h2 className="text-[30px] md:text-[40px] mt-2 ">
                <span className="text-[#60a145]">Green</span>Harvest
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
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
              </ul>
            </div>
            <div>
              <ul className="flex items-center text-gray-900 gap-3 md:gap-8 mt-2 text-[18px]">
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
                <li>
                  <Popover className="relative md:hidden flex border-none">
                    <PopoverButton>
                      {" "}
                      <Menu size={28} />
                    </PopoverButton>
                    <PopoverPanel anchor="bottom" className="flex flex-col">
                      <span>
                        <Link href="/">Home</Link>{" "}
                      </span>
                      <span>
                        <Link href="/pages">Pages</Link>
                      </span>
                      <span>
                        <Link href="/portfolio">Portfolio</Link>
                      </span>
                      <span>
                        <Link href="/blog">Blog</Link>
                      </span>
                      <span>
                        <Link href="/shop">Shop</Link>
                      </span>
                    </PopoverPanel>
                  </Popover>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
