import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Links extends Component{
  render() {
      const {data} = this.state
    return (
     <div>
     <div className="card card-body">
     {
        data != null && (<div>
        {
        data.products.map((val,i) => {
            return(
                <div className="card mt-2" key={i}>
                  <div className="card-body" style={{padding: '0.25rem'}}>
                   <div className="row">
                       <div className="col-md-8 mt-2 ml-1">
                          <h4>{val.title}</h4>
                           </div>
                         <div className="col-md-3 mt-2 ">
                             <button className="btn btn-sm btn-success float-right" style={{ width: "55px", height: "34px" }} > {val.price}</button>
                            </div>
                          </div>
               </div>
               </div>

            )
        })
     }
       </div>)
     }
     </div>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.postItems
});

export default connect(mapStateToProps)(Links);