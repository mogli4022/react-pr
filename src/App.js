import { useEffect, useState } from 'react';
import './App.css';
import AddData from './Components/AddData';
import GetData from './Components/GetData';
import TOdo from './Components/Todo';
import UpdateData from './Components/UpdateData';
function App() {
  

  return (
    <div className="App">
     {/* <GetData/> */}
     <TOdo/>
    </div>
  );
}

export default App;
