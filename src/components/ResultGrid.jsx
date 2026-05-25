import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from "react";
import ResultCard from "./ResultCard";


const ResultGrid = () => {
    const { query, activeTab, results, isLoading, error } = useSelector((state) => state.search);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!query.trim()) return;
        const getData = async () => {
            
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab === 'Photos') {
                    let response = await fetchPhotos(query);
                    data = response.results.map((elem) => ({
                        id: elem.id,
                        type: 'photo',
                        title: elem.alt_description,
                        thumbnail: elem.urls.small,
                        src: elem.urls.full,
                    }));
                }
                if (activeTab === 'Videos') {
                    let response = await fetchVideos(query);
                    data = response.videos.map((elem) => ({
                        id: elem.id,
                        type: 'video',
                        title: elem.user.name || 'Untitled',
                        thumbnail: elem.images,
                        src: elem.video_files[0].link,
                    }));
                }
                dispatch(setResults(data));
            } catch (err) {
                dispatch(setError(err.message || 'Something went wrong'));
            }
        }
        getData();
    }, [query, activeTab]);

    if (error) return <p className="text-red-500 text-center text-2xl">Error: {error}</p>
    if (isLoading) return <p className="text-white text-center text-2xl">Loading...</p>

    return (
        <div className='flex flex-wrap gap-6 p-4 justify-between w-full'>
            {results.map((item, idx) => (
                <div key={idx}>
                    <ResultCard item={item} />
                </div>
            ))}
        </div>
    )
}

export default ResultGrid