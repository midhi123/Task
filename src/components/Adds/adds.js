import React, { Component } from 'react';
import './adds.css'

class Adds extends Component{
  render() {
    return (
     <div>
     <div className="card card-body">
      <div className="frontPosition1Decoration"> 
        <div className="frontPosition1"> 
           <img  className="img-responsive"src={require('../../assests/images/logo.png')} alt="Alternative" width='300'/>
        </div> 
      </div>
     </div>
<div className="card card-body mt-5">
      <div className="frontPosition1Decoration"> 
        <div className="frontPosition1"> 
           <img  className="img-responsive"src={require('../../assests/images/logo.png')} alt="Alternative" width='300'/>
        </div> 
      </div>
     </div>
     </div>
    )
  }

}

export default Adds;

