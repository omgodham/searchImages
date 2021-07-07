import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {changeType,changeQuery, changeCategory} from '../../actions/changeType';
import {fetchData} from '../../actions/fetchData';

function Navbar({}) {

  const type = useSelector(state => state.type);
  const dispatch = useDispatch();
  const [query ,setQuery] = useState(""); 
  const [category ,setCategory] = useState(""); 
const handleClick = (method) => {
  if(method !== type){
    dispatch(changeType(method));
    // dispatch(fetchData(5 , method));
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(changeQuery(query));
  dispatch(fetchData({type:type , query:query}));
}

const handleDropChange = (category) => {
  setCategory(category);
  dispatch(changeCategory({category:category}));
  dispatch(fetchData({type:type , category:category}));
}

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" >SearchImages</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <span className="nav-link" onClick={() => handleClick("images")}>Photos</span>
        </li>
        {/* <li className="nav-item">
          <span className="nav-link" onClick={() => handleClick("videos")}>Videos</span>
        </li> */}
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textTransform:"capitalize"}}>
            {!category ? "Category" : category}
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("backgrounds")}>Backgrounds</span></li>
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("sports")}>Sports</span></li>
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("nature")}>Nature</span></li>
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("health")}>Health</span></li>
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("animals")}>Animals</span></li>
            <li><span className="dropdown-item" role="button" onClick={()=>handleDropChange("food")}>Food</span></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange = {(e) => setQuery(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
