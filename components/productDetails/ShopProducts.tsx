'use client'

import React from 'react'
import ProductCard, { Product } from '@/components/ui/ProductCard'

interface ShopProductsProps {
  products?: Product[]
}

const ShopProducts: React.FC<ShopProductsProps> = ({ 
  products = [
    {
        id: 'shop1',
        extraDiscount: 5,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=A+premium+cat+food+package+with+MEOWSI+branding+on+a+teal+background%2C+featuring+cat+kibble+and+cat+images&image_size=square',
        name: 'MEOWSI Cat Food',
        description: 'Premium cat food with essential nutrients and minerals',
        rating: 5.0,
        price: 480,
        packOptions: Array(4).fill({ size: 'Pack of 4', discount: 12 })
    },
    {
        id: 'shop2',
        extraDiscount: 10,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+dog+food+package+with+WOOFIE+branding+on+orange+background%2C+featuring+dog+kibble+and+happy+dog+images&image_size=square',
        name: 'WOOFIE Dog Food',
        description: 'Nutritious dog food for active and healthy dogs',
        rating: 4.8,
        price: 650,
        packOptions: Array(4).fill({ size: 'Pack of 6', discount: 15 })
    },
    {
        id: 'shop3',
        extraDiscount: 3,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Colorful+bird+seed+mix+package+with+CHIRPY+branding+on+yellow+background%2C+featuring+various+seeds+and+bird+images&image_size=square',
        name: 'CHIRPY Bird Seed Mix',
        description: 'Premium seed blend for all types of birds',
        rating: 4.5,
        price: 320,
        packOptions: Array(4).fill({ size: 'Pack of 3', discount: 8 })
    },
    {
        id: 'shop4',
        extraDiscount: 7,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Aquatic+fish+food+flakes+package+with+AQUA+FRESH+branding+on+blue+background%2C+featuring+tropical+fish+and+food+flakes&image_size=square',
        name: 'AQUA FRESH Fish Food',
        description: 'High-quality flakes for tropical and freshwater fish',
        rating: 4.7,
        price: 280,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 10 })
    },
    {
        id: 'shop5',
        extraDiscount: 8,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+rabbit+pellets+package+with+BUNNY+BITES+branding+on+green+background%2C+featuring+rabbit+pellets+and+cute+rabbit+images&image_size=square',
        name: 'BUNNY BITES Rabbit Pellets',
        description: 'Complete nutrition pellets for rabbits and small pets',
        rating: 4.6,
        price: 420,
        packOptions: Array(4).fill({ size: 'Pack of 5', discount: 12 })
    },
    {
        id: 'shop6',
        extraDiscount: 12,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+hamster+food+mix+package+with+TINY+TREATS+branding+on+purple+background%2C+featuring+mixed+seeds+and+hamster+images&image_size=square',
        name: 'TINY TREATS Hamster Mix',
        description: 'Balanced nutrition mix for hamsters and gerbils',
        rating: 4.4,
        price: 180,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 6 })
    },
    {
        id: 'shop7',
        extraDiscount: 6,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+puppy+food+package+with+PUPPY+LOVE+branding+on+pink+background%2C+featuring+small+kibble+and+puppy+images&image_size=square',
        name: 'PUPPY LOVE Puppy Food',
        description: 'Specially formulated nutrition for growing puppies',
        rating: 4.9,
        price: 720,
        packOptions: Array(4).fill({ size: 'Pack of 4', discount: 18 })
    },
    {
        id: 'shop8',
        extraDiscount: 4,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+guinea+pig+food+package+with+PIGGY+PARADISE+branding+on+coral+background%2C+featuring+pellets+and+guinea+pig+images&image_size=square',
        name: 'PIGGY PARADISE Guinea Pig Food',
        description: 'Vitamin C enriched pellets for guinea pigs',
        rating: 4.3,
        price: 380,
        packOptions: Array(4).fill({ size: 'Pack of 3', discount: 9 })
    },
    {
        id: 'shop9',
        extraDiscount: 9,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+ferret+food+package+with+FERRET+FEAST+branding+on+burgundy+background%2C+featuring+high+protein+kibble+and+ferret+images&image_size=square',
        name: 'FERRET FEAST Premium Food',
        description: 'High-protein nutrition specially designed for ferrets',
        rating: 4.8,
        price: 890,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 14 })
    },
    {
        id: 'shop10',
        extraDiscount: 11,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+turtle+food+pellets+package+with+SHELL+SHINE+branding+on+aqua+background%2C+featuring+turtle+pellets+and+turtle+images&image_size=square',
        name: 'SHELL SHINE Turtle Food',
        description: 'Calcium-rich pellets for healthy shell development',
        rating: 4.2,
        price: 350,
        packOptions: Array(4).fill({ size: 'Pack of 3', discount: 7 })
    },
    {
        id: 'shop11',
        extraDiscount: 13,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+parrot+food+mix+package+with+TROPICAL+TREATS+branding+on+rainbow+background%2C+featuring+colorful+seeds+and+parrot+images&image_size=square',
        name: 'TROPICAL TREATS Parrot Mix',
        description: 'Exotic seed blend for large parrots and macaws',
        rating: 4.7,
        price: 580,
        packOptions: Array(4).fill({ size: 'Pack of 4', discount: 16 })
    },
    {
        id: 'shop12',
        extraDiscount: 15,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+lizard+food+package+with+REPTILE+ROYAL+branding+on+desert+background%2C+featuring+insects+and+lizard+images&image_size=square',
        name: 'REPTILE ROYAL Lizard Food',
        description: 'Protein-rich diet for reptiles and lizards',
        rating: 4.5,
        price: 450,
        packOptions: Array(4).fill({ size: 'Pack of 2', discount: 11 })
    }
]
}) => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-8 p-6">
      {products.map(product => (
        <div key={product.id} className="mb-6">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ShopProducts