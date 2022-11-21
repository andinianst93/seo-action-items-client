import React from 'react'

const ItemCols = () => {
  return (
    <div className='hidden lg:bg-gray-200 lg:text-gray-500 lg:border-l-2 lg:border-r-2 lg:grid lg:grid-cols-5 lg:items-center lg:py-[1rem] lg:px-[1.5rem] lg:gap-x-[1rem] lg:capitalize text-base lg:font-bold'>
      <span className='col-span-1'>item</span>
      <span className='col-span-1'>Recommendation</span>
      <span className='mx-auto'>priority</span>
      <span className='mx-auto'>status</span>
      <span className='mx-auto'>action</span>
    </div>
  )
}

export default ItemCols
