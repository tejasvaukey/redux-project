import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className='border relative w-[18vw] h-80 '>
        <div className='h-full'>
          {item.type === 'photo' ? (<img src={item.src} alt={item.title} className='w-full h-full  object-cover object-center mb-2 rounded' />) : ''}
          {item.type === 'video' ? (<video autoPlay loop muted src={item.src} alt={item.title} className='w-full h-full object-cover object-center mb-2 rounded' />) : ''}
        </div>
        
        <div id='bottom' className='w-full p-4 absolute bottom-0 text-white'>
          <h3 className='text-m font-semibold capitalize'>{item.title}</h3>
        </div>
    </div>
  )
}

export default ResultCard