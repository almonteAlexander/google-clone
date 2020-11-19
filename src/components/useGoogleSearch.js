import { useState, useEffect } from 'react'
import axios from 'axios'
import API_KEY from './keys'

const CONTEXT_KEY = "5d364343093b4bc52";

const useGoogleSearch = (searchValue) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const result =  await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${searchValue}`);
        setData(result.data);
        }
        fetchData();
    }, [searchValue])

    return { data };
}

export default useGoogleSearch;