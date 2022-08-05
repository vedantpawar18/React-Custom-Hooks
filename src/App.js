import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import UseTimeout from './Hooks/UseTimeout';
import TestComponent from './Components/TestComponent';
import UseFetch from './Hooks/UseFetch';
import useDebounceCallback from './Hooks/useDebounceCallback';

function App() {
  // const [ready, setReady] = useState(false);

  // useEffect (() =>{
  //   let timer= setTimeout(()=>{
  //     setReady(true)
  //   },5000)
  //   return () =>{
  //     clearTimeout(timer)
  //   }
  // },[]);

  const ready= UseTimeout(2000);
  const  {loading, data, error} = UseFetch();
  const [count, setCount]= useState(0);

  

  const handleScrollEvent= () =>{
    setCount((prev)=>prev+1);
  }

  useDebounceCallback(()=>{
    console.log(count)
  }, 2000)

  useEffect(()=>{
    window.addEventListener("scroll", (handleScrollEvent))
    return () =>{
      window.removeEventListener("scroll", (handleScrollEvent))
    }
  });

  return (
    <div className="App">
     <h1>{ready? "I'm Ready" : "I'm Not Ready"}</h1>
     <div>
      <TestComponent />
     </div>
     <div>
      {loading? "Loading":"Complete"}
     </div>
     <div>
      {data.map((item) =>{
        return <div key={item.id}>
         {item.login}
        </div>
      })}
     </div>
     <div style={{position:"sticky", top:"100px"}}>
      <h3>Scroll Count: {count}</h3>
     </div>
    </div>
  );
}

export default App;
