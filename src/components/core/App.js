
import './App.css';
import Navbar from './Navbar';
import Images from '../Home/Images';
import { useState } from 'react';
function App() {

  const [type , setType] = useState("videos");
  const [query ,setQuery] = useState(""); 
  const [filter ,setFilter] = useState(""); 

  return (
    <div className="App">
      {/* navbar */}
      <Navbar type={type} setType={setType} query={query} setQuery={setQuery} filter={filter} setFilter={setFilter}/>
      {/* Images */}
      <Images type={type} setType={setType} query={query} filter={filter}/>

      {/* videos */}

    </div>
  );
}

export default App;
