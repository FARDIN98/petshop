'use client'
import React from 'react'

interface Category {
  id: string
  name: string
  backgroundColor: string
  borderColor: string
  onClick?: () => void
}

interface CategoryCardProps {
  category: Category
  onClick?: () => void
}

interface ShopByCategoriesProps {
  categories?: Category[]
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (category.onClick) {
      category.onClick()
    }
  }

  return (
    <div 
      className={`flex items-center justify-between border w-[304px] h-[72px] px-5 py-3 mb-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]`}
      style={{
        backgroundColor: category.backgroundColor,
        borderColor: category.borderColor
      }}
      onClick={handleClick}
    >
      <div className="w-11 h-11 rounded-full bg-gray-300"></div>
      <p className="text-[#5e5e5e] font-poppins text-xl font-medium leading-[30px] flex-1 ml-4">
        {category.name}
      </p>
    </div>
  )
}

const ShopByCategories: React.FC<ShopByCategoriesProps> = ({ 
  categories = [
    {
      id: '1',
      name: 'All Cat Food',
      backgroundColor: '#c8d8c4',
      borderColor: '#aec6cf',
      onClick: () => console.log('Clicked category 1')
    },
    {
      id: '2', 
      name: 'All Cat Food',
      backgroundColor: '#fff8ee',
      borderColor: '#aec6cf',
      onClick: () => console.log('Clicked category 2')
    },
    {
      id: '3', 
      name: 'All Dog Food',
      backgroundColor: '#fff8ee',
      borderColor: '#aec6cf',
      onClick: () => console.log('Clicked category 3')
    },
    {
      id: '4', 
      name: 'All Parrot Food',
      backgroundColor: '#fff8ee',
      borderColor: '#aec6cf',
      onClick: () => console.log('Clicked category 4')
    },
  ]
}) => {
  return (
    <div className="flex flex-col items-start px-8">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default ShopByCategories
