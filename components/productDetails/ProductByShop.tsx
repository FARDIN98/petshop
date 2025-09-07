import React from 'react'
import ShopProducts from './ShopProducts'

const ProductByShop = () => {
  return (
    <div>
      <div className="pl-6">
        <p className="text-3xl font-bold text-black mt-8" style={{ fontFamily: 'Bitter' }}>
          <span className="text-gray-600">Shop more from&nbsp;</span>
          <span className="text-green-500" style={{ color: '#88b392' }}>Mew Mew Shop</span>
        </p>
      </div>
      <ShopProducts />
    </div>
  )
}

export default ProductByShop
