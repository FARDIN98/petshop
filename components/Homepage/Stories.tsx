import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const Stories = () => {
  const stories = [
    {
      id: 1,
      backgroundImage: '/mf8p9bxl-75yz521.png',
      profileImage: '/mf8p9bxl-pmedo35.png',
      hasPlayIcon: false
    },
    {
      id: 2,
      backgroundImage: '/mf8p9bxl-dnkmy0x.png',
      profileImage: '/mf8p9bxl-crlf5mx.png',
      hasPlayIcon: false
    },
    {
      id: 3,
      backgroundImage: '/mf8p9bxl-ef7gp3w.png',
      profileImage: '/mf8p9bxl-g0lu6fc.png',
      hasPlayIcon: true,
      playIcon: '/mf8p9bxf-hf9ghsb.svg'
    },
    {
      id: 4,
      backgroundImage: '/mf8p9bxl-dnkmy0x.png',
      profileImage: '/mf8p9bxl-pmedo35.png',
      hasPlayIcon: true,
      playIcon: '/mf8p9bxf-xhim2uu.svg'
    },
    {
      id: 5,
      backgroundImage: '/mf8p9bxl-2p0hj7e.png',
      profileImage: '/mf8p9bxl-am67yav.png',
      hasPlayIcon: false
    },
    {
      id: 6,
      backgroundImage: '/mf8p9bxl-zekm2n9.png',
      profileImage: '/mf8p9bxl-pmedo35.png',
      hasPlayIcon: true,
      playIcon: '/mf8p9bxf-xhim2uu.svg'
    },
    {
      id: 7,
      backgroundImage: '/mf8p9bxl-7cc5o7n.png',
      profileImage: '/mf8p9bxl-pmedo35.png',
      hasPlayIcon: true,
      playIcon: '/mf8p9bxf-5x7l4gg.svg'
    }
  ];

  return (
    <div className='w-full py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className="w-full flex flex-col items-start justify-center mb-12">
          <h1 className="text-[#5e5e5e] text-[32px] font-bold leading-[38px] w-[510px] h-[38px] text-left mb-4 font-[family-name:var(--font-bitter)]">
            100+ stores|1000+ products
          </h1>
          <p className="text-[#5e5e5e] text-[20px] leading-[30px] w-[408px] h-[30px] text-left font-[family-name:var(--font-poppins)]">
            Quick add-to-carts your pet will love!
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-4 md:gap-4 lg:gap-3" style={{ width: 'max-content' }}>
            {stories.map((story) => (
              <Card 
                 key={story.id}
                 className="relative flex-shrink-0 w-[140px] h-[190px] sm:w-[150px] sm:h-[200px] md:w-[163px] md:h-[221px] border-2 border-[#48484833] rounded-[12px] overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 touch-pan-x"
                style={{
                  backgroundImage: `url(${story.backgroundImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Profile Picture */}
                 <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                   <Image
                     src={story.profileImage}
                     alt="Profile"
                     width={36}
                     height={36}
                     className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#e5ffff] object-cover"
                   />
                 </div>
                 
                 {/* Play Icon */}
                 {story.hasPlayIcon && (
                   <div className="absolute bottom-[60px] right-[35px] sm:bottom-[70px] sm:right-[45px] md:bottom-[82px] md:right-[53px]">
                     <Image
                       src={story.playIcon}
                       alt="Play"
                       width={56}
                       height={56}
                       className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                     />
                   </div>
                 )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
