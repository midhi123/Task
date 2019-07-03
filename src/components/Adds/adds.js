import React, { Component } from 'react';
import './adds.css'

class Adds extends Component{
  render() {
    return (
     <div>
     <h4 className="mb-2">Adds</h4>
     <div className="card card-body" style={{width: '302px', padding: '0px'}}>
           <img  className="img-responsive" src={require('../../assests/images/pepsi.webp')} alt="Alternative" width='300'/>
       
     </div>
    <div className="card card-body mt-5" style={{width: '302px', padding: '0px'}}>
           <img  className="img-responsive" src={require('../../assests/images/dettol.jpeg')} alt="Alternative" width='300'/>
        </div> 
      
   <div className="card card-body mt-5" style={{width: '302px', padding: '0px'}}>
           <img  className="img-responsive" src={require('../../assests/images/drading.jpeg')} alt="Alternative" width='300'/>
        </div> 

     </div>
    )
  }

}

export default Adds;

