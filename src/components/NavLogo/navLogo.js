import React from 'react';
import './navLogo.css'

const navLogo = (props) => (
  <div>
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark mb-5">
  <a className="navbar-brand" href="#index">
    <img src={require('../../assests/images/icon.jpeg')} alt="logo" style={{width:"40px"}} />
  </a>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" />
    </form>
</nav>
</div>
);
export default navLogo;