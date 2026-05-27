import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection } from '../redux/features/collectionSline'

const CollectionPage = () => {
    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    dispatch(clearCollection())

    const clearAll = () => {
        dispatch(clearCollection())
    }
    return (
        <div className='w-full min-h-screen py-6 px-10 overflow-auto '>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold'>
                    {collection.length > 0 ? `My Collection (${collection.length})` : 'My Collection is Empty'}
                </h2>
                <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer'
                onClick={() => clearAll()}
                >
                    Clear Collection
                </button>
            </div>
            <div className='flex flex-wrap gap-6 p-4 justify-start w-full'>
                {collection.map((item, idx) => (
                    <CollectionCard key={idx} item={item} />
                ))}</div>
        </div>
    )
}

export default CollectionPage