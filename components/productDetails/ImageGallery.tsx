'use client'
import React from 'react'
import Image from 'next/image'

interface RectangleData {
  id: string
  src: string
  alt: string
  hasBorder: boolean
  width: number
  height: number
  borderRadius: string
}

const ImageGallery = () => {
  // JSON data for small rectangles (left side)
  const smallRectangles: RectangleData[] = [
    {
      id: 'rectangle59',
      src: '/mf9p68v4-plq08ov.png',
      alt: 'Rectangle 59',
      hasBorder: true,
      width: 116,
      height: 116,
      borderRadius: 'rounded-xl'
    },
    {
      id: 'rectangle60',
      src: '/mf9p6erq-3w6hobu.png',
      alt: 'Rectangle 60',
      hasBorder: false,
      width: 116,
      height: 116,
      borderRadius: 'rounded-xl'
    },
    {
      id: 'rectangle61',
      src: '/mf9p6ksu-2p52j1b.png',
      alt: 'Rectangle 61',
      hasBorder: false,
      width: 116,
      height: 116,
      borderRadius: 'rounded-xl'
    },
    {
      id: 'rectangle62',
      src: '/mf9pia5p-pewjg6v.png',
      alt: 'Rectangle 62',
      hasBorder: false,
      width: 116,
      height: 116,
      borderRadius: 'rounded-xl'
    }
  ]

  // JSON data for large rectangle (right side)
  const largeRectangle: RectangleData = {
    id: 'rectangle58',
    src: '/mf9pkmnb-su6ivri.png',
    alt: 'Rectangle 58',
    hasBorder: false,
    width: 512,
    height: 519,
    borderRadius: 'rounded-[18px]'
  }

  // Click handler for rectangles
  const handleRectangleClick = (rectangleId: string) => {
    console.log(`Clicked on ${rectangleId}`)
  }

  return (
    <div className="col-span-12 lg:col-span-6">
      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:flex gap-4 h-full">
        {/* Small rectangles - Compact vertical stack */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          {smallRectangles.map((rectangle) => (
            <div 
              key={rectangle.id} 
              className="relative cursor-pointer transition-transform hover:scale-105 hover:shadow-lg w-[116px] h-[116px]"
              onClick={() => handleRectangleClick(rectangle.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleRectangleClick(rectangle.id)
                }
              }}
            >
              <Image
                src={rectangle.src}
                alt={rectangle.alt}
                width={rectangle.width}
                height={rectangle.height}
                className={`${rectangle.borderRadius} object-cover transition-all duration-200 w-full h-full ${
                  rectangle.hasBorder ? 'border border-[#88b392]' : ''
                }`}
              />
            </div>
          ))}
        </div>
        
        {/* Large rectangle - Takes remaining space */}
        <div className="flex-1 flex items-start justify-center">
          <div 
            className="relative cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
            onClick={() => handleRectangleClick(largeRectangle.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleRectangleClick(largeRectangle.id)
              }
            }}
          >
            <Image
              src={largeRectangle.src}
              alt={largeRectangle.alt}
              width={largeRectangle.width}
              height={largeRectangle.height}
              className={`${largeRectangle.borderRadius} object-cover transition-all duration-200 max-w-full h-auto`}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile/Tablet Layout: Stacked */}
      <div className="lg:hidden grid grid-cols-1 gap-6">
        {/* Small rectangles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {smallRectangles.map((rectangle) => (
            <div 
              key={rectangle.id} 
              className="relative cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
              onClick={() => handleRectangleClick(rectangle.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleRectangleClick(rectangle.id)
                }
              }}
            >
              <Image
                src={rectangle.src}
                alt={rectangle.alt}
                width={rectangle.width}
                height={rectangle.height}
                className={`${rectangle.borderRadius} object-cover transition-all duration-200 ${
                  rectangle.hasBorder ? 'border border-[#88b392]' : ''
                }`}
              />
            </div>
          ))}
        </div>
        
        {/* Large rectangle */}
        <div className="w-full flex justify-center">
          <div 
            className="relative cursor-pointer transition-transform hover:scale-105 hover:shadow-lg max-w-full"
            onClick={() => handleRectangleClick(largeRectangle.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleRectangleClick(largeRectangle.id)
              }
            }}
          >
            <Image
              src={largeRectangle.src}
              alt={largeRectangle.alt}
              width={largeRectangle.width}
              height={largeRectangle.height}
              className={`${largeRectangle.borderRadius} object-cover transition-all duration-200 w-full h-auto max-w-[512px] max-h-[519px]`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery