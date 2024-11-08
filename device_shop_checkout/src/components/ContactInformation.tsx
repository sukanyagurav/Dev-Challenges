import React from 'react'

const ContactInformation = () => {
  return (
    <div className='flex-1 bg-white p-8'>
      <h3>Contact Information</h3>

      <div>
        <label htmlFor="name">First & Last name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email"/>
      </div>
      <div>

      </div>
      <button>
        Continue
      </button>
    </div>
  )
}

export default ContactInformation
