import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();



    const handleSearch = (e) => {
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText("");
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler} className='flex bg-(--c1) gap-5 p-10'>
                <input
                    className='w-full border-2 px-4  py-2 text-xl rounded outline-none'
                    type="text" placeholder="Search  Anything..." value={text} onChange={handleSearch} required />

                <button
                    className='active:scale-95 cursor-pointer border-2 px-4  py-2 text-xl rounded outline-none'
                >Search</button>
            </form>
        </div>
    )
}

export default SearchBar
