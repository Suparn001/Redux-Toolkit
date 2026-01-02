import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gifs'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => {
        return state.search.activeTab;
    });

    const tabButtons = tabs.map((tab, index) => {
        return (
            <button key={index}
                onClick={() => {
                    dispatch(setActiveTab(tab));
                }}
                className={`${activeTab === tab ? 'bg-blue-500' : 'bg-gray-600'} rounded px-5 py-2 cursor-pointer active:scale-95 
                transition
                '`}>
                {tab === 'photos' ? 'Photos' : tab === 'videos' ? 'Videos' : 'GIFs'}
            </button>
        );
    });



    return (
        <div className='flex gap-10 p-10'>
            {tabButtons}
        </div>
    )
}

export default Tabs
