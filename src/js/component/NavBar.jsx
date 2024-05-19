import React from "react";
// import PropTypes from 'prop-types';

const NavBar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-gray2">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 ms-5" href="#">Start Boostrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)};

export default NavBar;