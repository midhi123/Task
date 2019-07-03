import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavLogo from "../../components/NavLogo/navLogo";
import Adds from "../../components/Adds/adds"
import * as Actions from '../../store/actions/index';

class LinkDetails extends Component{
 componentDidMount() {
    this.props.getProductsData();
  }
  render() {
    console.log("hii",this.props.match.params.id);

    const product =this.props.posts ? this.props.posts.products.filter((val) => {
      if(val.id == this.props.match.params.id) {
        return true
      }
      else{
        return false
      }
    }) : null

    return (
    <div>
        {
            product != null && (<div className="conatiner">
             <NavLogo />
                {
                  product.map( (val, i) => (<div key={i}>        
                      <div className="row">
                      <div className="col-md-6">
                      <h4 className="text-center">Product Details</h4>
                      <div className="card card-body">
                          <h1>{val.title} <span  style={{fontSize: '37%',fontWeight: '700'}} className="float-right badge badge-success" >{val.price}</span></h1>
                           <h4>{val.description}</h4>
                      </div>
                      </div>
                       <div className="col-md-6 ">
                     <Adds />
                      </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }  
          
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

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(LinkDetails));