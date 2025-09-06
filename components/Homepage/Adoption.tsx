import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const Adoption = () => {
  const pets = [
    {
      id: 1,
      name: 'Pluto',
      description: 'Hi, I am pluto . i love to play all day .',
      image: '/mf8pm6i0-54j5twd.png',
      bgColor: '#d9d9d9',
      borderColor: '#00cccc'
    },
    {
      id: 2,
      name: 'Bunny',
      description: 'Bunny love to eat carrot all day',
      image: '/mf8pm6i0-1a4nhgp.png',
      bgColor: '#cbaacb',
      borderColor: 'transparent'
    },
    {
      id: 3,
      name: 'Gugun',
      description: 'I love to sleep and eat all day',
      image: '/mf8pm6i0-kenaiy2.png',
      bgColor: '#fcebd5',
      borderColor: 'transparent'
    },
    {
      id: 4,
      name: 'Togo',
      description: 'I love to dance and sing all day',
      image: '/mf8pm6i0-lf3m40y.png',
      bgColor: '#aec6cf',
      borderColor: 'transparent'
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-8">
      <div className="bg-[#88b392] rounded-xl px-6 md:px-12 lg:px-16 py-6 md:py-10 lg:py-12 overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-start lg:mt-32">
            <h1 className="text-white text-2xl md:text-3xl lg:text-[26px] font-bold leading-9 mb-6 font-[family-name:var(--font-manrope)]">
              Find you best furry friend.
            </h1>
            <button className="flex items-center gap-2 border border-white px-5 py-2 rounded hover:bg-white hover:text-[#88b392] transition-colors">
              <span className="text-white hover:text-[#88b392] text-xl md:text-2xl lg:text-[26px] font-bold font-[family-name:var(--font-manrope)]">
                Adoption
              </span>
              <Image
                src="/mf8pm6hz-12tp0m0.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end gap-4 w-full lg:w-auto">
            {/* View All Link */}
            <a href="#" className="text-white text-base underline font-[family-name:var(--font-inter)] hover:opacity-80">
              View All
            </a>
            
            {/* Pet Cards Container */}
            <div className="flex flex-col lg:flex-row items-center gap-5">
              {/* Pet Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {pets.map((pet) => (
                  <Card 
                    key={pet.id}
                    className="border-0 shadow-none rounded-xl p-3 w-full max-w-[186px]"
                    style={{ 
                      backgroundColor: pet.bgColor,
                      border: pet.borderColor !== 'transparent' ? `1px solid ${pet.borderColor}` : 'none'
                    }}
                  >
                    <CardContent className="p-0 space-y-3">
                      {/* Pet Image */}
                      <div className="w-full aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={pet.image}
                          alt={pet.name}
                          width={162}
                          height={162}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Pet Name Badge */}
                      <div className="flex justify-center">
                        <div className="bg-[#dee7e7] rounded-full px-3 py-1">
                          <span className="text-[#1a2e2e] text-sm font-bold font-[family-name:var(--font-manrope)]">
                            {pet.name}
                          </span>
                        </div>
                      </div>
                      
                      {/* Pet Description */}
                      <p className="text-[#5e5e5e] text-sm leading-5 font-[family-name:var(--font-manrope)] text-center">
                        {pet.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Arrow Navigation */}
              <button className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                <Image
                  src="/mf8pm6hz-kexfv8o.svg"
                  alt="Arrow Up"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adoption
