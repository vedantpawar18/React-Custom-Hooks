import React, { useEffect, useState } from 'react'

const UseTimeout = (delay) => {

    const [ready, setReady] = useState(false);

    useEffect (() =>{
      let timer= setTimeout(()=>{
        setReady(true)
      },delay)
      return () =>{
        clearTimeout(timer)
      }
    },[]);

  return ready;
};

export default UseTimeout