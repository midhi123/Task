import React from 'react';
import './navLogo.css'

const navLogo = (props) => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
  <a className="navbar-brand" href="#">
    <img src={require('../../assests/images/icon.jpeg')} alt="logo" style={{width:"40px"}} />
  </a>
</nav>
);
export default navLogo;