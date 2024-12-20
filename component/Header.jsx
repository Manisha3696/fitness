import React from 'react';
import '../css/Header.css'
import logo from '../images/logo1.png'
function Header() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style={{ backgroundColor: 'black' }}>
    <img src={logo}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Header;
