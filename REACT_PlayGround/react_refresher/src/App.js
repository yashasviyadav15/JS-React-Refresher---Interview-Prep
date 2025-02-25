import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import WindowSize from './windowsSize'
function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const [windowssize,setwindowsize]=useState({width:window.innerWidth,height:window.innerHeight})
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