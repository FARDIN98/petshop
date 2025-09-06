import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const Mall = () => {
  const categories = [
    {
      id: 1,
      image: '/mf8mslge-8ncqroo.png',
      alt: 'Cat Food',
      title: 'Cat Food'
    },
    {
      id: 2,
      image: '/mf8mslge-52votyn.png',
      alt: 'Cat food',
      title: 'Cat food'
    },
    {
      id: 3,
      image: '/mf8mslge-efgy7h8.png',
      alt: 'Treats',
      title: 'Treats'
    },
    {
      id: 4,
      image: '/mf8mslge-7cqizjb.png',
      alt: 'Toys',
      title: 'Toys'
    },
    {
      id: 5,
      image: '/mf8mslge-84qd29m.png',
      alt: 'Litter & Supplies',
      title: 'Litter & Supplies'
    },
    {
      id: 6,
      image: '/mf8mslge-zucjajo.png',
      alt: 'Wellness',
      title: 'Wellness'
    }
  ];

  return (
    <div className='w-full py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className="w-full flex flex-col items-start justify-center mb-12">
          <h1 className="text-[#5e5e5e] text-[32px] font-bold leading-[38px] w-[510px] h-[38px] text-left mb-4 font-[family-name:var(--font-bitter)]">
            Welcome to the biggest pet mall
          </h1>
          <p className="text-[#5e5e5e] text-[20px] leading-[30px] w-[408px] h-[30px] text-left font-[family-name:var(--font-poppins)]">
            Quick add-to-carts your pet will love!
          </p>
        </div>
        
        {/* Mall Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="w-full max-w-[196px] mx-auto cursor-pointer hover:scale-105 transition-transform duration-300 border-0 shadow-none bg-transparent"
            >
              <div className="aspect-square">
                <Image
                  src={category.image}
                  alt={category.alt}
                  width={196}
                  height={196}
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <CardContent className="p-0 pt-3">
                <p className="text-[#5e5e5e] font-[family-name:var(--font-poppins)] text-[20px] font-semibold text-center leading-[30px]">
                  {category.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mall
