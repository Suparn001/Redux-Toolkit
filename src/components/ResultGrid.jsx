import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux';
import {
    setQuery,
    setActiveTab,
    setResults,
    setLoading,
    setError
} from '../redux/features/searchSlice';
import { useEffect } from 'react';
import ResultCard from './ResultCard';



const ResultGrid = () => {

    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);



    useEffect(function () {
        if (!query) {
            return;
        }
        const getData = async () => {
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab == 'photos') {
                    let response = await fetchPhotos({
                        query: query,
                    });
                    // data = response;
                    data = response.map((item) => {
                        return {
                            id: item.id,
                            type: 'photo',
                            title: item.alt_description,
                            thumbnail: item.urls.small,
                            src: item.urls.full,
                            url: item.links.html
                        }
                    });
                }

                if (activeTab == 'videos') {
                    let response = await fetchVideos({
                        query: query,
                    });
                    data = response.map((item) => {
                        return {
                            id: item.id,
                            type: 'video',
                            title: item.user.name,
                            thumbnail: item.video_pictures[0].picture,
                            src: item.video_files[0].link,
                            url: item.url
                        }
                    });
                }

                if (activeTab == 'gifs') {
                    let response = await fetchGIF({
                        query: query,
                    });
                    data = response.map((item) => {
                        return {
                            id: item.id,
                            type: 'gif',
                            title: item.title || 'gif',
                            thumbnail: item.media_formats.tinygif.url,
                            src: item.media_formats.gif.url,
                            url: item.url

                        }
                    });

                }
                dispatch(setResults(data));
                console.log(`Fetched ${activeTab} data:`, data);
            } catch (error) {
                dispatch(setError(error.message));
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, [query, activeTab, dispatch]);
    if (error) {
        return <h1>Error</h1>
    }
    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {
                results.map((item, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                        <ResultCard item={item} />
                    </div>
                ))
            }
        </div >
    )
}

export default ResultGrid
