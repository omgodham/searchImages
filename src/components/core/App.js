
import './App.css';
import Navbar from './Navbar';
import Images from '../Home/Images';
import { useState } from 'react';
function App() {

  const [type , setType] = useState("videos");

  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* Images */}
      <Images type={type} setType={setType}/>

      {/* videos */}

    </div>
  );
}

export default App;
