import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './adds.css'

class HomeMapSection extends Component{

    constructor(props){
        super(props);
            
        this.state = {
            lat:'',
            lng:''
        }
    }
   

  render() {
      let askGeoLocation = navigator.geolocation
      if(askGeoLocation){
          askGeoLocation.getCurrentPosition((position)=>{
              this.setState({lat:position.coords.latitude})
              this.setState({lng:position.coords.longitude})
          })
      }
    return (
      <div>
                        <Map google={this.props.google} zoom={14}
                            initialCenter={{
                                lat: this.state.lat,
                                lng: this.state.lng
                            }}>
                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                        </Map>
            </div>
        )
    }
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBOQcBlbuSNv1F9GHCp8BAp6ZfDJoRLjXQ")
})(HomeMapSection)
    

