import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/mf8ka9t7-fd0g8wz.png"
        alt="Cat Tree Banner - Climb up & Cosy up!"
        width={1440}
        height={431}
        className="w-full h-auto rounded-b-[40px] object-cover"
        priority
      />
    </div>
  );
};

export default Hero;