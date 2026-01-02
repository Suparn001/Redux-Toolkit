import React from 'react'
import { removeCollection } from '../redux/features/collectionSlice';
import { useDispatch } from 'react-redux';

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id));
    }


    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a href={item.url}
                className='h-full'
                target='_blank' rel='noreferrer'>
                {item.type == 'photo' || item.type == 'gif' ? <img src={item.src} alt={item.title} className="w-full h-full object-cover object-center" /> : ''}
                {item.type == 'video' ? <video src={item.src} alt={item.title}
                    autoPlay loop muted className="w-full h-full object-cover object-center" /> : ''}
            </a>



            {/* <img src={item.thumbnail} alt={item.title} className="w-full h-auto" /> */}
            <div
                id='bottom'
                className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white">
                <h2 className='text-lg font-semibold h-14 overflow-hidden capitalize'>
                    {item.title}
                </h2>
                <button className='bg-indigo-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95'
                    onClick={() => {
                        removeFromCollection(item)
                    }}
                >Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard
