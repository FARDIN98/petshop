import React from 'react'
import ShopByCategories from './ShopByCategories'
import ProductByCategory from './ProductByCategory'

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex justify-start py-8 px-8 pl-24">
        <p className="text-[#5e5e5e] font-poppins text-xl leading-[30px] w-[408px] h-[30px]">
          We&apos;re here with care that feels like family
        </p>
      </div>
      
      {/* Rectangle 38 Background Section */}
      <div className="bg-[#d9d9d9] w-full max-w-[1280px] h-[235px] mx-auto">
        {/* Content can be added here */}
      </div>
      
      {/* Cat Food Section */}
      <div className="flex justify-start py-8 px-8 pl-20">
        <p className="text-[#5e5e5e] font-poppins text-xl font-bold leading-[30px] w-[92px] h-[30px]">
          Cat Food
        </p>
      </div>

      {/* Shop By Categories and Product By Categories Section */}
      <div className="flex flex-row gap-8 px-8">
        {/* Shop By Categories - Left Side */}
        <div className="flex-shrink-0">
          <ShopByCategories />
        </div>
        
        {/* Product By Categories - Right Side */}
        <div className="flex-1">
          <ProductByCategory />
        </div>
      </div>
    </div>
  )
}

export default Shop
