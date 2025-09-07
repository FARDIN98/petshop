import React from 'react'

const ProductDescription = () => {
  const productData = {
    title: "Product Description",
    description: "Made with non-toxic materials, this rattle ball in attractive red and pink colours is ideal for cats who love fun, independent play! The soft wool ball is a texture your cat will love, and is made lightweight and easy for them to play with and roll around. It comes with a rattle inside, the sounds of which keep your cat captivated and eager to chase it-encouraging their natural hunting instincts and active playtime!",
    features: [
      "Made with wool",
      "Captivating rattle inside",
      "Lightweight design",
      "Suitable for independent play",
      "Ideal for active playtime",
      "Encourages natural hunting instincts",
      "Vibrant, attractive colours",
      "Available in one size",
      "Circumference: 17.3 cm/ 6.8 inches"
    ],
    notes: [
      "We recommend pet parental supervision during playtime with toys.",
      "Always buy size-appropriate toys for your pet.",
      "No toy is indestructible. In case of any damage, replace it immediately to ensure your pet's safety."
    ],
    brandDescription: "Discover the TLC Knotty Rattle Ball Interactive Toy For Cat - Red & Pink by Heads Up For Tails — thoughtfully designed by India's most trusted pet care brand. Priced at just ₹129 and , this product is part of our exclusive HUFT collection, made with premium, pet-safe materials and tested for real-life pet needs. From picky eaters to playful chewers, we understand what pets love — and what pet parents expect. With over a decade of experience, 100+ stores, and a million+ happy pets served, HUFT stands for quality, compassion, and community. When you shop HUFT, you're not just buying a product — you're joining a family of pet lovers who truly care."
  }

  return (
    <div className="min-w-0 max-w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 font-poppins text-black overflow-x-hidden break-words box-border" style={{overflowWrap: 'break-word'}}>
      {/* Product Description Title */}
      <h2 className="text-xl font-semibold leading-8 tracking-[0.4px] mb-4">
        {productData.title}
      </h2>
      
      {/* Main Description */}
      <p className="text-base leading-8 tracking-[0.32px] mb-6 break-words word-wrap">
        {productData.description}
      </p>
      
      {/* Features Section */}
      <h3 className="text-xl font-semibold leading-8 tracking-[0.4px] mb-4">
        Features:
      </h3>
      
      <ul className="mb-6 space-y-2">
        {productData.features.map((feature, index) => (
          <li key={index} className="text-base leading-[19px] tracking-[0.32px] flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span className="break-words">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Please Note Section */}
      <h3 className="text-xl font-semibold leading-8 tracking-[0.4px] mb-4">
        Please Note:
      </h3>
      
      <ul className="mb-6 space-y-2">
        {productData.notes.map((note, index) => (
          <li key={index} className="text-base leading-[19px] tracking-[0.32px] flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span className="break-words">{note}</span>
          </li>
        ))}
      </ul>
      
      {/* Brand Description */}
      <p className="text-base leading-8 tracking-[0.32px] break-words word-wrap">
        {productData.brandDescription}
      </p>
    </div>
  )
}

export default ProductDescription
