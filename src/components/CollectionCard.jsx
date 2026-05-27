import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCollection } from '../redux/features/collectionSline'
import { removeToast } from '../redux/features/collectionSline'

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()
    const removeCollection = (item) => {
        dispatch(removeFromCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <div className='border relative w-[18vw] h-80 rounded overflow-hidden group cursor-pointer'>
            <a href={item.src} target="_blank" rel="noopener noreferrer" className='h-full'>
                {item.type === 'photo' ? (<img src={item.src} alt={item.title} className='w-full h-full  object-cover object-center mb-2 rounded' />) : ''}
                {item.type === 'video' ? (<video autoPlay loop muted src={item.src} alt={item.title} className='w-full h-full object-cover object-center mb-2 rounded' />) : ''}
            </a>

            <div id='bottom' className='w-full p-4 absolute bottom-0 text-white flex justify-between items-center'>
                <h3 className='text-m font-semibold capitalize h-14 overflow-hidden'>{item.title}</h3>
                <button
                    onClick={() => removeCollection(item)}
                    className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded cursor-pointer'>Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard
