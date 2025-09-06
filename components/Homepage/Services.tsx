import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Shop',
      description: 'lets do shoppinf for your baby',
      image: '/mf8l23n1-59zu3v3.png',
      bgImage: null
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Find vet and healthcare service',
      image: '/mf8l23n1-5qwe3lq.png',
      bgImage: null
    },
    {
      id: 3,
      title: 'Grooming',
      description: 'Find best groomer nearby',
      image: '/mf8l23n1-gd6kxnv.png',
      bgImage: null
    },
    {
      id: 4,
      title: 'Adoption',
      description: '100+ babys waiting for you',
      image: '/mf8l23n1-1foj6d5.png',
      bgImage: '/mf8l23n1-jpmvp8n.png'
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-start justify-center mb-12">
          <h1 className="text-[#5e5e5e] text-[32px] font-bold leading-[38px] w-[510px] h-[38px] text-left mb-4 font-[family-name:var(--font-bitter)]">
            How Can We Help Your Pet Today?
          </h1>
          <p className="text-[#5e5e5e] text-[20px] leading-[30px] w-[408px] h-[30px] text-left font-[family-name:var(--font-poppins)]">
            We&apos;re here with care that feels like family
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="overflow-hidden rounded-[20px] border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-[216px] overflow-hidden">
                {service.bgImage && service.id === 4 ? (
                  // Special handling for Adoption card with background
                  <div 
                    className="relative w-full h-full"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundPosition: '67px 0px',
                      backgroundSize: '56.47% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={360}
                      height={325}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={306}
                    height={216}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Content Section */}
              <CardContent className="p-0">
                <div className="flex items-start justify-between bg-[#f8f9fa] p-5 min-h-[92px]">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black font-poppins text-[20px] font-semibold leading-5">
                      {service.title}
                    </h3>
                    <p className="text-[#00000099] font-poppins text-[16px] leading-5">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full flex-shrink-0">
                    <Image
                      src="/mf8l23ml-jab0dp9.svg"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;