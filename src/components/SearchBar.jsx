import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    }
  return (
    <div className=' '>
        <form className='flex p-10 gap-5 bg-(--c1)' onSubmit={(e) => submitHandler(e)}>
            <input type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder='Search...' 
            className='w-full px-4 py-2 rounded-l-md border border-gray-300 text-xl placeholder:text-gray-500'/>

            <button type='submit' className='px-4 py-2 rounded-md text-xl active:scale-95 cursor-pointer bg-blue-700 text-white'
            >Search</button>
        </form>
        
    </div>
  )
}

export default SearchBar