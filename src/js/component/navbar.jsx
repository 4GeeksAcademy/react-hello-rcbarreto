import React from "react";

const Navbar = () => {


    return (
  
		
    <nav className="navbar navbar-expand-lg p-3 mb-2 bg-dark text-white">
  			<div className="container-fluid">
    			<a className="navbar-brand text-white" style={{marginLeft: "15%"}} href="#">Start Bootstrap</a>
   					 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     				 <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" style={{marginRight: "15%"}} id="navbarNav" >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#" >Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" >Services</a>
        </li>
        <li nameclassname="nav-item">
          <a className="nav-link text-white"  href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

	);
};



export default Navbar;