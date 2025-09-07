'use client'
import React from 'react'
import ImageGallery from './ImageGallery'
import ProductInfo from './ProductInfo'

const Products = () => {
  return (
    <div className="grid grid-cols-12 gap-8 p-4 mx-4 md:mx-8 lg:mx-12">
      {/* Left side - Small rectangles and Large rectangle */}
      <ImageGallery />

      {/* Right side - Product Details */}
      <ProductInfo />
    </div>
  )
}

export default Products
