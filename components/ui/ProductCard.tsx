'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export interface PackOption {
  size: string
  discount: number
}

export interface Product {
  id: string
  image: string
  name: string
  description: string
  rating: number
  price: number
  packOptions: PackOption[]
  extraDiscount?: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-[280px] h-[532px] flex flex-col font-poppins relative overflow-hidden">
      {/* Product Image and Rating */}
      <div className="relative w-[280px] h-[230px]">
        <div 
          className="absolute inset-0 rounded-t-lg bg-cover bg-center object-cover" 
          style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute top-0 left-0 right-0 bg-[#dd6e58] text-white text-center py-1 rounded-t-lg w-[280px]">
          <p className="text-base font-poppins">Extra {product.extraDiscount}% OFF</p>
        </div>
        <div className="absolute bottom-2 left-2 flex items-center bg-white rounded px-1 py-0.5 space-x-1">
          <Star className="w-6 h-6 text-[#DD6E58]" fill="#DD6E58" />
          <span className="text-[#5e5e5e] text-base font-poppins">{product.rating}</span>
        </div>
      </div>

      <CardContent className="flex-1 flex flex-col p-2">
        {/* Product Info */}
        <h3 className="text-[#88b392] text-xl font-bold mt-4 font-poppins">{product.name}</h3>
        <p className="text-[#473426] text-base mt-1 font-poppins">{product.description}</p>

        {/* Pack Options */}
        <div className="mt-11 space-y-3">
          <div className="flex justify-between">
            {product.packOptions.slice(0, 2).map((option, idx) => (
              <div key={idx} className="relative w-[100px] h-11">
                <div className="absolute top-0 border border-[#d9d9d9] rounded bg-[#fff8ee] p-1 w-full">
                  <p className="text-xs text-[#473426] font-poppins">{option.size}</p>
                </div>
                <div className="absolute bottom-0 bg-[#dd6e58] rounded text-center w-full py-0.5">
                  <p className="text-xs text-white font-poppins">{option.discount}%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
              {product.packOptions.slice(2, 4).map((option, idx) => (
                <div key={idx} className="relative w-[100px] h-11">
                <div className="absolute top-0 border border-[#d9d9d9] rounded bg-[#fff8ee] p-1 w-full">
                  <p className="text-xs text-[#473426]">{option.size}</p>
                </div>
                <div className="absolute bottom-0 bg-[#dd6e58] rounded text-center w-full py-0.5">
                  <p className="text-xs text-white">{option.discount}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price and Add Button */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-poppins">৳ {product.price}</p>
          <Button 
            className="bg-[#88b392] hover:bg-[#88b392]/90 text-white rounded-lg px-6 py-2 min-w-[80px]"
            onClick={() => console.log(`Added ${product.name} to cart`)}
          >
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard