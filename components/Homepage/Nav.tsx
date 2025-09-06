import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top cream section */}
      <div className="w-full h-[85px] bg-[#fffaf3] flex items-center justify-between px-16">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4">
          <Image
            src="/mf8kh9vh-pefxvww.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </div>
        
        {/* Search Bar with Icon */}
        <div className="flex-1 max-w-[638px] mx-8 relative">
          <div className="w-full h-[40px] bg-white border border-[#aec6cf] rounded-[20px] flex items-center px-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-gray-700 font-poppins"
            />
            <Image
              src="/mf8ki2lv-npu4qjo.svg"
              alt="Search"
              width={24}
              height={24}
              className="w-[24px] h-[24px] ml-2 cursor-pointer"
            />
          </div>
        </div>
        
        {/* Right Section: Shop Now Button and Cart */}
        <div className="flex items-center gap-4 mr-4">
          {/* Shop Now Button */}
          <button className="inline-flex items-center justify-center gap-[10px] bg-[#88b392] rounded-[20px] px-5 py-[10px] w-[144px] h-[40px] whitespace-nowrap">
            <span className="text-[#fff8ee] font-poppins text-[20px] font-semibold leading-5 tracking-[0.4px] whitespace-nowrap">
              Shop Now
            </span>
          </button>
          
          {/* Cart Icon */}
          <Image
            src="/mf8kk48l-m7o6wsf.svg"
            alt="Shopping Cart"
            width={24}
            height={24}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
      </div>
      
      {/* Bottom green section */}
      <div className="w-full h-[48px] bg-[#88b392] flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Dogs Dropdown */}
          <div className="flex items-center justify-center gap-1 w-[78px] h-[24px] cursor-pointer">
            <span className="text-white font-poppins text-[16px] leading-5">
              Dogs
            </span>
            <Image
              src="/mf8kkakk-apvau57.svg"
              alt="Caret Down"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          
          {/* Cats Dropdown */}
          <div className="flex items-center justify-center gap-1 w-[78px] h-[24px] cursor-pointer">
            <span className="text-white font-poppins text-[16px] leading-5">
              Cats
            </span>
            <Image
              src="/mf8kke6z-fhxxek4.svg"
              alt="Caret Down"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          
          {/* Small Animals Dropdown */}
          <div className="flex items-center justify-center gap-1 w-[142px] h-[24px] cursor-pointer">
            <span className="text-white font-poppins text-[16px] leading-5">
              Small Animals
            </span>
            <Image
              src="/mf8kki2t-mka59uq.svg"
              alt="Caret Down"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          
          {/* Birds Dropdown */}
          <div className="flex items-center justify-center gap-1 w-[78px] h-[24px] cursor-pointer">
            <span className="text-white font-poppins text-[16px] leading-5">
              Birds
            </span>
            <Image
              src="/mf8kkkcy-cukh8t8.svg"
              alt="Caret Down"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          
          {/* Fishs Dropdown */}
          <div className="flex items-center justify-center gap-1 w-[78px] h-[24px] cursor-pointer">
            <span className="text-white font-poppins text-[16px] leading-5">
              Fishes
            </span>
            <Image
              src="/mf8kkn3t-33qdfg0.svg"
              alt="Caret Down"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;