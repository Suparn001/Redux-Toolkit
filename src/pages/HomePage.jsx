import React, { useEffect, useState } from 'react'
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetSearch } from '../redux/features/searchSlice'
const HomePage = () => {

    const dispatch = useDispatch();
    const { query } = useSelector((store) => store.search);

    useEffect(() => {
        dispatch(resetSearch());
    }, [dispatch]);


    return (
        <div>
            <SearchBar />
            {query != '' ? <div><Tabs /><ResultGrid /></div> : ''}
        </div>
    )
}

export default HomePage
