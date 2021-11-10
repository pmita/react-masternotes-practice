import { useState, useEffect } from 'react';

export const useFetch = (url, method = 'GET') => {
    // STATE
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (postData) => { //arguement of what we need to send
        setOptions({
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(postData)
        });
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (fetchOptions) => {
            setIsPending(true);

            try{
                const response = await fetch(url, { ...fetchOptions, signal : controller.signal }); // associates fetch with above controller
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

        if(method === 'GET'){
            fetchData();
        } 
        if(method === 'POST' && options){
            fetchData(options);
        }

        return () => {
            // We are defining our cleaning function to abort the useEffect
            controller.abort();
        }
    }, [url, options, method]);

    return {data : data, isPending : isPending, error: error, postData};
}