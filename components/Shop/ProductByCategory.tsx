'use client'

import React from 'react'
import ProductCard, { Product } from '@/components/ui/ProductCard'

interface ProductByCategoryProps {
  products?: Product[]
}

const ProductByCategory: React.FC<ProductByCategoryProps> = ({ 
  products = [
    {
        id: 'group517',
        extraDiscount: 5,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=A+premium+cat+food+package+with+MEOWSI+branding+on+a+teal+background%2C+featuring+cat+kibble+and+cat+images&image_size=square',
        name: 'MEOWSI Cat Food',
        description: 'Premium cat food with essential nutrients and minerals',
        rating: 5.0,
        price: 480,
        packOptions: Array(4).fill({ size: 'Pack of 4', discount: 12 })
    },
    {
        id: 'group521',
        extraDiscount: 10,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+dog+food+package+with+WOOFIE+branding+on+orange+background%2C+featuring+dog+kibble+and+happy+dog+images&image_size=square',
        name: 'WOOFIE Dog Food',
        description: 'Nutritious dog food for active and healthy dogs',
        rating: 4.8,
        price: 650,
        packOptions: Array(4).fill({ size: 'Pack of 6', discount: 15 })
    },
    {
        id: 'group519',
        extraDiscount: 3,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Colorful+bird+seed+mix+package+with+CHIRPY+branding+on+yellow+background%2C+featuring+various+seeds+and+bird+images&image_size=square',
        name: 'CHIRPY Bird Seed Mix',
        description: 'Premium seed blend for all types of birds',
        rating: 4.5,
        price: 320,
        packOptions: Array(4).fill({ size: 'Pack of 3', discount: 8 })
    },
    {
        id: 'group522',
        extraDiscount: 7,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Aquatic+fish+food+flakes+package+with+AQUA+FRESH+branding+on+blue+background%2C+featuring+tropical+fish+and+food+flakes&image_size=square',
        name: 'AQUA FRESH Fish Food',
        description: 'High-quality flakes for tropical and freshwater fish',
        rating: 4.7,
        price: 280,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 10 })
    },
    {
        id: 'group518',
        extraDiscount: 8,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+rabbit+pellets+package+with+BUNNY+BITES+branding+on+green+background%2C+featuring+rabbit+pellets+and+cute+rabbit+images&image_size=square',
        name: 'BUNNY BITES Rabbit Pellets',
        description: 'Complete nutrition pellets for rabbits and small pets',
        rating: 4.6,
        price: 420,
        packOptions: Array(4).fill({ size: 'Pack of 5', discount: 12 })
    },
    {
        id: 'group523',
        extraDiscount: 12,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+hamster+food+mix+package+with+TINY+TREATS+branding+on+purple+background%2C+featuring+mixed+seeds+and+hamster+images&image_size=square',
        name: 'TINY TREATS Hamster Mix',
        description: 'Balanced nutrition mix for hamsters and gerbils',
        rating: 4.4,
        price: 180,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 6 })
    },
    {
        id: 'group520',
        extraDiscount: 6,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+puppy+food+package+with+PUPPY+LOVE+branding+on+pink+background%2C+featuring+small+kibble+and+puppy+images&image_size=square',
        name: 'PUPPY LOVE Puppy Food',
        description: 'Specially formulated nutrition for growing puppies',
        rating: 4.9,
        price: 720,
        packOptions: Array(4).fill({ size: 'Pack of 4', discount: 18 })
    },
    {
        id: 'group524',
        extraDiscount: 4,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+guinea+pig+food+package+with+PIGGY+PARADISE+branding+on+coral+background%2C+featuring+pellets+and+guinea+pig+images&image_size=square',
        name: 'PIGGY PARADISE Guinea Pig Food',
        description: 'Vitamin C enriched pellets for guinea pigs',
        rating: 4.3,
        price: 380,
        packOptions: Array(4).fill({ size: 'Pack of 3', discount: 9 })
    },
    {
        id: 'group525',
        extraDiscount: 9,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+ferret+food+package+with+FERRET+FEAST+branding+on+burgundy+background%2C+featuring+high+protein+kibble+and+ferret+images&image_size=square',
        name: 'FERRET FEAST Premium Food',
        description: 'High-protein nutrition specially designed for ferrets',
        rating: 4.8,
        price: 890,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 14 })
    },
]
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 p-8">
      {products.map(product => (
        <div key={product.id} className="mb-6">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductByCategory
