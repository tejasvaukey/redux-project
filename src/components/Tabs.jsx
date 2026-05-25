import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['Photos', 'Videos'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className='flex gap-5 p-10'>
      {tabs.map((elem,idx) => (
        <button 
          className={`${(activeTab === elem ? 'bg-blue-500' : 'bg-gray-200')} px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 text-xl`} 
          key={idx}
          onClick={() => dispatch(setActiveTab(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  )
}

export default Tabs