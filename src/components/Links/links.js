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

displayBookings = bookings => {
        const { currentPage, bookingsPerPage } = this.state;
        const indexOfLastBooking = currentPage * bookingsPerPage;
        const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
        let searchedBookings = this.props.posts ? this.props.posts.products.slice(indexOfFirstBooking, indexOfLastBooking) : null;
        return (
            searchedBookings && (
                searchedBookings.map((val, i) =>  <div className="card mt-2" key={i}>
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
               </div>)
            )
        )
    }


handleItemsChange = event => this.setState({ bookingsPerPage: event.target.value });

  render() {
     const {bookingsPerPage } = this.state;
        const pageNumbers = [];
        if(this.props.posts){
     for (let i = 1; i <= Math.ceil(this.props.posts.products.length / bookingsPerPage); i++) {
            pageNumbers.push(i);
        }
        }
   
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item"
                    key={number}
                >
                    <span className="pagination-link-styles" id={number} onClick={this.handleClick}>{number}</span>
                </li>
            );
        });
    return (
     <div>
     <h4 style={{textAlign:'center'}} className="mb-2">Product Lists</h4>
      <div className="card card-body mb-3">
  {this.displayBookings()}
      </div>
  <div className="card card-body py-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <ul className="pagination m-0 float-right">
                                    <li className="page-item">
                                        <i className="fa fa-angle-double-left pagination-link-styles" id={1} onClick={this.handleClick} aria-hidden="true"></i>
                                    </li>
                                    {renderPageNumbers}
                                    <li className="page-item"
                                    >
                                        <i className="fa fa-angle-double-right pagination-link-styles" id={pageNumbers[pageNumbers.length - 1]} onClick={this.handleClick} aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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