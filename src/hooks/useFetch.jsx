import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);//state1 data
    const [loading, setLoading] = useState(null);//state2 loading
    const [error, setError] = useState(null);//state3 error

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        //loading state will be true ultil data didnt appear
        fetchDataFromApi(url)
        //as res aapear loading will be false
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
