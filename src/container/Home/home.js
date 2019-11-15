import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavLogo from "../../components/NavLogo/navLogo";
import Links from "../../components/Links/links";
import HomeMapSection from "../../components/Adds/adds"

class Home extends Component{
  render() {
    return (
      <div>
      <NavLogo />
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-5">
       <Links />
      </div>
      <div className="col-md-7">
       <HomeMapSection />
      </div>
      </div>
      </div>    
      </div>
    )
  }
}

export default Home;