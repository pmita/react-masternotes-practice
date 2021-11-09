import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    // STATE
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try{
                const response = await fetch(url, {signal : controller.signal}); // associates fetch with above controller
                console.log(response);
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (err) {
                if(err.name === 'AbortError'){
                    console.log('Fetch request was aborted');
                } else {
                    setError('Could not fetch the data');
                    setIsPending(false);
                }
            }
        }

        fetchData();

        return () => {
            // We are defining our cleaning function to abort the useEffect
            controller.abort();
        }
    }, [url]);

    return {data : data, isPending : isPending, error: error};
}