import { useEffect, useState } from 'react';
import './App.css';
import AddData from './Components/AddData';
import GetData from './Components/GetData';
import UpdateData from './Components/UpdateData';
function App() {
  
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    if(window.location.href.includes("update")){
      setDisplay(true)
    }else{
      setDisplay(false)
    }
  },[])
  
  return (
    <div className="App">
     <GetData/>
    </div>
  );
}

export default App;
