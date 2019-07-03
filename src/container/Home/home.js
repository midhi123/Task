import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavLogo from "../../components/NavLogo/navLogo";
import Links from "../../components/Links/links";
import Adds from "../../components/Adds/adds"

class Home extends Component{
  render() {
    return (
      <div>
      {/*<NavLogo /> */}
      <div className="container">
      <h1 style={{textAlign:'center'}} className="mb-4"><Link to="/link-details">MainPage</Link></h1>
      
      <div className="row">
      <div className="col-md-8">
       <Links />
      </div>
      <div className="col-md-4">
       <Adds />
      </div>
      </div>
      </div>    
      </div>
    )
  }
}

export default Home;