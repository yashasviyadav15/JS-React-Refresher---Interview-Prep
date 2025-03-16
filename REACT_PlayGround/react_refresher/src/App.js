import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import WindowSize from './windowsSize'
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const [windowssize,setwindowsize]=useState({width:window.innerWidth,height:window.innerHeight})
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  const postData = {
    title: 'foo0',
    body: 'bar',
    userId: 1,
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    async function posstData() {
      const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
    
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    posstData();
  useEffect(()=>{
    const handleResize = () => {
      setwindowsize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
window.addEventListener("resize",()=>setwindowsize({
  width: window.innerWidth,
  height: window.innerHeight,
}))
 // Clean up the event listener on unmount
 return () => window.removeEventListener("resize", handleResize);
  },[])

  return (
    <div>
      <WindowSize/>
      {windowssize.width} X {windowssize.height}
      <h1>Debounce Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default App;