import React from 'react'
import { Link } from 'react-router-dom'

const Navba = () => {
  return (
    <div>
        <div className=" bg-(--c2) text-white p-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">Media Search</h1>
                <div className='flex gap-4'>
                    <Link to="/search" className='text-lg bg-(--c4) text-(--c1) rounded px-4 py-2'>Search</Link>
                    <Link to="/collection" className='text-lg bg-(--c4) text-(--c1) rounded px-4 py-2'>Collections</Link>
                </div>
            </div>
    </div>
  )
}

export default Navba