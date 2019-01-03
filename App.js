import React, { Component } from "react";
import "./App.css";
import Map from "./component/Map";
import SquareAPI from "./API/";
import SideBar from "./component/SideBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }
    /*defining gm_authFailure function* 
    I thought it should go inside the custructor but when I do that 
    I get unexpected token errors
    gm_authFailure(){
    window.alert("Google Maps error!")
    }resorted to .catch*/
  closeAllMarkers = () => {
   const markers = this.state.markers.map(marker => {
    marker.isOpen = false;
    return marker;
   });
   this.setState({markers: Object.assign(this.state.markers, markers) });
  };
  handleMarkerClick = marker => {
    this.closeAllMarkers();
    console.log(marker)
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker) });
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    
     SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue =Object.assign(venue, res.response.venue)
      this.setState({venues:Object.assign(this.state.venues,newVenue)})
      console.log(newVenue)
    });

  }

  handleListItemClick =venue => {
    const marker=this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker)

  }
  componentDidMount() {
    SquareAPI.search({
      near: "Olathe,KS",
      query: "coffee shop",
      limit: 10
    })
    .then(results => {
      console.log(results)
      const {venues} = results.response;
      const {center} = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat:venue.location.lat,
          lng: venue.location.lng,
          isOpen:false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({venues, center, markers});

    })
    .catch(error => alert("Sorry, the page could not load"));
  }
  render() {
    return (
      <div className="App">
        <SideBar 
          {...this.state}
          handleListItemClick={this.handleListItemClick} 
        />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
     </div>
    );
  }
}

export default App;
