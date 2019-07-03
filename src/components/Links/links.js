import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux';
import * as Actions from '../../store/actions/index'

class Links extends Component{

  state = {
        currentPage: 1,
        bookingsPerPage: 10,
    }
  componentDidMount() {
    this.props.getProductsData();
  }

  handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

  render() {
     
    return (
     <div>
     <h4 style={{textAlign:'center'}} className="mb-2">Product Lists</h4>
      <div className="card card-body mb-3">
    {
     this.props.posts != null && (<div>
     {
      this.props.posts.products.map((val,i) => {
      return(
        <div className="card mt-2" key={i}>
                  <div className="card-body" style={{padding: '0.25rem'}}>
                   <div className="row">
                       <div className="col-md-8 mt-2 ml-1">
                          <h4>{val.title}</h4>
                           </div>
                         <div className="col-md-3 mt-2 ">
                         <Link to={`/link-details/${val.id}`}> <button className="btn btn-sm btn-success float-right" style={{ width: "55px", height: "34px" }} >details</button></Link>
                            
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
  <ul class="pagination float-right">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.postItems
});

const mapDispatchToProps = dispatch => ({
  getProductsData: () => dispatch(Actions.getProducts())
});

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Links));