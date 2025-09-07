'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const ProductInfo = () => {
  return (
    <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:ml-16 lg:mt-16">
      {/* Mew Mew Shop */}
      <div className="w-[157px] h-6">
        <p className="text-[#88b392] text-xl font-bold underline font-poppins leading-6">
          Mew Mew Shop
        </p>
      </div>

      {/* Rating Frame 908 */}
      <div className="flex items-center justify-between bg-white rounded border w-[55px] h-6 pr-0.5">
        <Image
          src="/mf9pvrn1-5pxbmos.svg"
          alt="Star rating"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <p className="text-[#5e5e5e] text-base font-medium font-poppins leading-6">
          5.0
        </p>
      </div>

      {/* Product Title */}
      <div className="w-full max-w-[562px]">
        <h2 className="text-[#473426] text-2xl font-bold font-poppins leading-tight mb-4">
          TLC knotty rattle ball Interaction Cat Toys - Rope Style
        </h2>
        {/* Horizontal Rule */}
        <hr className="border-t-2 border-gray-200 mb-4" />
      </div>

      {/* MRP Price and Add Button */}
      <div className="flex flex-col gap-3">
        <p className="text-[#473426] text-xl font-semibold font-poppins">
          MRP : ৳ 480.00
        </p>
        <Button 
          className="bg-[#88b392] hover:bg-[#7aa085] text-[#fff8ee] rounded-[20px] px-5 py-2.5 h-10 w-[83px] text-xl font-semibold font-poppins tracking-[0.4px] transition-colors"
          onClick={() => console.log('Add to cart clicked')}
        >
          Add
        </Button>
      </div>

      {/* Horizontal Rule */}
      <hr className="border-t-2 border-gray-200 mb-4" />

      {/* Delivery & Service Information */}
      <div className="flex flex-col gap-4">
        {/* Delivery Information Section */}
         <div className="flex flex-col gap-4 mt-6">
           {/* Title */}
           <h3 className="text-[#473426] text-base font-bold font-poppins">Delivery & Service information</h3>

           {/* Delivery Date with Truck Icon */}
           <div className="flex items-center gap-2">
             <Image
               src="/mf9qnhis-7l1s3k4.svg"
               alt="Truck"
               width={24}
               height={22}
               className="object-contain"
             />
             <p className="text-[#473426] text-xs font-medium font-poppins">
               Expected Delivery Date - sun Aug 26 2025
             </p>
             
           </div>

           {/* Icons and Information */}
           <div className="flex items-start gap-2">
             <div className="flex flex-col gap-4">
               <Image
                 src="/mf9qntav-k5xnnjx.svg"
                 alt="Package"
                 width={24}
                 height={25}
                 className="object-contain"
               />
             </div>
             <div className="flex flex-col gap-4">
               <p className="text-[#473426] text-xs font-medium font-poppins pt-1">
                 No Exchange & Returns
               </p>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default ProductInfo