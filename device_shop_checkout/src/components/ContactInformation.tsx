import React from 'react'

const ContactInformation = () => {
  return (
    <div className='flex-1 bg-white p-8'>
      <h3 className='text-black font-bold mb-8'>Contact Information</h3>

      <div className='mb-6'>
        <label htmlFor="name" className='font-semibold text-gray-400 mb-2 block'>First & Last name</label>
        <input type="text" id="name"  className=' text-gray-400  block bg-gray-200 w-full p-2 rounded' placeholder='Enter first & last name'/>
      </div>
      <div className='mb-6'>
        <label htmlFor="email" className='font-semibold text-gray-400 mb-2 block'>Email Address</label>
        <input type="email" id="email" className=' text-gray-400  block bg-gray-200 w-full p-2 rounded'  placeholder='Enter email address'/>
      </div>
      <div  className='flex justify-between gap-2 mb-6'>
        <div className='w-full'>
          <label htmlFor="country" className='font-semibold text-gray-400 mb-2 block'>Country</label>
        </div>
        <div className='w-full'>
          <label htmlFor="postal_code" className='font-semibold text-gray-400 mb-2 block'>Postal Code</label>
          
        </div>
      </div>
      <button className='w-full bg-black text-gray-100  py-3 rounded-md'>
        Continue
      </button>
    </div>
  )
}

export default ContactInformation
