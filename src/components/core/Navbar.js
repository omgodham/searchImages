import React,{useState} from 'react'

function Navbar({type , setType ,setQuery , setFilter,filter}) {
  
const [tempQuery , setTempQuery] = useState("");

  const handleClick = (category) => {
    if(category !== type)
    setType(category); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(tempQuery);
  }

  const handleDropChange = (category) => {
   setFilter(category);
   setQuery("");
  }
  


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SearchImages</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" onClick={() => handleClick("images")}>Photos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleClick("videos")}>Videos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textTransform:'capitalize'}}>
            {filter ? filter : 'Category'}
          </a>
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
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={tempQuery} onChange = {(e) => setTempQuery(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
