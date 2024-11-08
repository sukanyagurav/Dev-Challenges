import React from 'react'

const ProductItem = ({id,name,quantity,price,color,imageSrc}) => {
  return (
    <div className='flex gap-4  '>
         <div className='w-[8rem] h-[6rem] bg-white p-2 rounded-lg'>
         <img src={imageSrc} alt={name}  className='w-full h-full object-contain'/>

         </div>
          <div className='grid grid-cols-2  w-full grid-rows-[30px_1fr_25px]	 '>
          <h2 className='font-bold '>{name}</h2>
          <p className='justify-self-end font-bold '>{price}</p>
          <p className='text-gray-500 '>{color}</p>
         
          <h3 className='col-start-1 align-self-end text-gray-500	'>X {quantity}</h3>
          <button className='justify-self-end'>X</button>
        </div>
    </div>
  )
}

export default ProductItem
