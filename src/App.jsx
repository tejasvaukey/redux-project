import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {

  return (
    <div className='h-screen w-full bg-gray-950 '>
      <button className='bg-blue-700 px-4 py-2 m-3' onClick={async ()=> await fetchPhotos('nature')}>Get Photos</button>
      <button className='bg-blue-700 px-4 py-2 m-3' onClick={async ()=> await fetchVideos('nature')}>Get Video</button>
    </div>
  )
}

export default App