import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionPage'
import Navba from './components/Navba'
import { ToastContainer} from 'react-toastify';


const App = () => {

  return (
    <div className='min-h-screen w-full bg-gray-950 text-white '>
      <Navba />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<HomePage />} />
        <Route path='/collection' element={<CollectionsPage />} />
      </Routes>

      <ToastContainer  />


    </div>
  )
}

export default App