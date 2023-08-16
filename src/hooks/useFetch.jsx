import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [error, setError]  = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setError(null);
        setData(null);

        fetchDataFromApi(url)
           .then((res) => {
            setLoading(false);
            setData(res);
           })
           .catch((err) => {
            setLoading(false);
            setError("Something went wrong!");
           })
    },[url])
    // console.log(data)

    return {data, loading, error};
};
 export default useFetch;