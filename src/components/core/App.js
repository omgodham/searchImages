
import './App.css';
import Navbar from './Navbar';
import Images from '../Home/Images';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/fetchData';

function App() {
  const {type,data} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(type);
    dispatch(fetchData({page:1, type:type}))
  },[]);

  // const [type , setType] = useState("images");

  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* Images */}
      <Images />

      {/* videos */}

    </div>
  );
}

export default App;
