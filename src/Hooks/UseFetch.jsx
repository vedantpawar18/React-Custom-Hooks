import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"

const UseFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError]= useState(false);

    const fetchData= () =>{
        setLoading(true);
        axios.get("http://api.github.com/users?q=Masai")
        .then((r)=>{
            setLoading(false);
            setData(r.data);
        })
        .catch((e)=>{
            setError(true);
            setLoading(false);
        })
    };

    useEffect(() =>{
        fetchData();
    },[]);

  return {data, loading, error};
}

export default UseFetch