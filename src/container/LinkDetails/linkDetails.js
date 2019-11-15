import React, { Component } from 'react';
import axios from 'axios'
import NavLogo from "../../components/NavLogo/navLogo";
import './details.css';

class LinkDetails extends Component {


  state = {
    resSingleData: []
  }
  componentDidMount() {
    this.getProductsData();
  }

  getProductsData = () => {
    axios.get('http://localhost:8001/api/products').then((res) => {
      this.setState({ resSingleData: res.data.products })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log("hii", this.props.match.params.id);

    const product = this.state.resSingleData ? this.state.resSingleData.filter((val) => {
      if (val.id == this.props.match.params.id) {
        return true
      }
      else {
        return false
      }
    }) : null

    return (
      <div>
       <NavLogo />
        {
          product != null && (<div className="container">

            <h4>Product details</h4>
            {
              product.map((val, i) => (<div key={i}>

                <div className="row">

                  <div className="col-md-2">

                    <div className="card card-body detail">
                    <img src = {require("../images/image1.jpeg")} />
                    </div>
                  </div>
                  <div className="col-md-2">

                    <div className="card card-body detail">
                    <img src = {require("../images/image1.jpeg")} />
                    </div>
                  </div>
                  <div className="col-md-2">

                    <div className="card card-body detail">
                    <img src = {require("../images/image1.jpeg")} />
                    </div>
                  </div>
                  <div className="col-md-2">

                    <div className="card card-body detail">
                    <img src = {require("../images/image1.jpeg")} />
                    </div>
                  </div>
                  <div className="col-md-2">

                    <div className="card card-body detail">
                    <img src = {require("../images/image1.jpeg")} />
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          )
        }
        <div className="container">
          <div>
            <h1>cafe details</h1>
            <p>items</p>
            <p>distance</p>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="info">
                <h5>info</h5>
                <p>address</p>
                <p>somewhere near to you</p>
              </div>
              <div>
                hours
          <p>time</p>
              </div>
              <div>
                <h5>Category</h5>
                <p>items,places,types,etc</p>
              </div>

            </div>


            <div className="col-md-3 ">

            </div>
            <div className="col-md-5 ">
              <div className="map-details">
                maps diagram
          </div>
            </div>
          </div>
          <hr />
          <div className="row comm">
            <div className="col-md-12 ">
            <div className = "row">
              <div className="col-md-1">
                <img className = "img-co"/>
                </div>
              <div className="col-md-6">
                <h4>Suneeth</h4>
                <p> food is very good</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    )
  }
}



export default LinkDetails;