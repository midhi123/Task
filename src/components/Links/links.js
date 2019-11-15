import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class Links extends Component {

    state = {
        resData: []
    }
    componentDidMount() {
        this.getProductsData();
    }

    getProductsData = () => {
        axios.get('http://localhost:8001/api/products').then((res) => {
            this.setState({ resData: res.data.products })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state.resData)
        return (
            <div>
                {this.state.resData != null && this.state.resData.map((value, i) => {
                    console.log(value)
                    return (
                        <div class="container-fluid">
                            <div class="row">

                                <div class="col-12 mt-3">
                                    <Link to={`/link-details/${value.id}`}>
                                        <div class="card-group vgr-cards">
                                            <div class="card">
                                                <div class="card-img-body">
                                                    <img class="card-img" src= {require("../../container/images/image1.jpeg")} alt="Card image cap" />
                                                </div>
                                                <div class="card-body">
                                                    <h4 class="card-title">{value.title}</h4>
                                                    <p class="card-text">{value.price}</p>
                                                <a href="#" class="btn btn-outline-primary">{value.description}</a>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Links;