import React from 'react'
import { useEffect } from 'react';

const useDebounceCallback  =(callback, delay) =>{

    useEffect(()=>{
        let debounceId= setTimeout(() =>{
            callback();
        }, delay);
        return ()=>{
            clearTimeout(debounceId);
        }
    }, [callback, delay])
        
};
 


export default useDebounceCallback