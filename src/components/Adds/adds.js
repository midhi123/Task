import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './adds.css'

class HomeMapSection extends Component{
  render() {
    return (
      <div>
                        <Map google={this.props.google} zoom={14}
                            initialCenter={{
                                lat: 17.4399,
                                lng: 78.4983
                            }}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                        </Map>
            </div>
        )
    }
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCgZ4MSAN1Qa88ma5OWu4urlk0x4N7k-wE")
})(HomeMapSection)
    

