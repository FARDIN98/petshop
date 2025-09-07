import React from 'react'

const ShopByPet = () => {
  const petCategories = [
    // First row
    { name: 'Cat', image: '/mfa15k52-ffa9z7l.png', bgColor: 'bg-orange-200', rotation: 'rotate-180' },
    { name: 'Hamster', image: '/mfa15k53-x4yl4xk.png', bgColor: 'bg-green-200', rotation: 'rotate-180' },
    { name: 'Fish', image: '/mfa15k53-i4qsb5h.png', bgColor: 'bg-blue-200', rotation: 'rotate-180' },
    { name: 'Hamster', image: '/mfa15k53-tndmyvz.png', bgColor: 'bg-green-200', rotation: 'rotate-180'},
    { name: 'Parrot', image: '/mfa15k53-wzkj77r.png', bgColor: 'bg-purple-200' },
    { name: 'Rabbit', image: '/mfa15k53-j0mt7eq.png', bgColor: 'bg-blue-300' },
    // Second row
    { name: 'Exotic Pets', image: '/mfa15k53-jsvwt8o.png', bgColor: 'bg-indigo-200', rotation: 'rotate-180' },
    { name: 'Plants', image: '/mfa15k53-ci6o201.png', bgColor: 'bg-green-300', rotation: 'rotate-180' },
    { name: 'Spider', image: '/mfa15k53-sb29e0g.png', bgColor: 'bg-orange-300', rotation: 'rotate-180' },
    { name: 'Dog', image: '/mfa15k53-wkvei8f.png', bgColor: 'bg-blue-200' },
    { name: 'Rabbit', image: '/mfa15k53-l2p4wjb.png', bgColor: 'bg-red-200' },
    { name: 'Turtle', image: '/mfa15k53-ggxhamy.png', bgColor: 'bg-purple-300' },
  ]

  return (
    <div className='w-full py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className="w-full flex flex-col items-start justify-center mb-12">
          <h1 className="text-[#5e5e5e] text-[32px] font-bold leading-[38px] max-w-[510px] text-left mb-4 font-[family-name:var(--font-bitter)]">
            Shop by pet
          </h1>
          <p className="text-[#5e5e5e] text-[20px] leading-[30px] max-w-[408px] text-left font-[family-name:var(--font-poppins)]">
            Quick add-to-carts your pet will love!
          </p>
        </div>
        
        {/* Pet Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {petCategories.map((pet, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Circular Image Container */}
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full ${pet.bgColor} flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-300`}>
                <img 
                  src={pet.image} 
                  alt={pet.name}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${pet.rotation || ''}`}
                />
              </div>
              
              {/* Pet Name Label */}
              <p className="mt-4 text-black text-base sm:text-lg md:text-xl font-semibold text-center font-[family-name:var(--font-poppins)] transition-colors duration-300 group-hover:text-gray-700">
                {pet.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopByPet
