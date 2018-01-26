
import React, { Component } from 'react';
import logo from './logo.svg';
import {Head} from './Head';
import {AutoComplete} from './AutoComplete';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Head />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <em>Driving TravelDistance app</em> test by <a href="http://juandavidarce.co/"target="_blank" >Juan David Arce </a></h1>
        </header>
        <p className="App-intro">
          This is a test for <code>MOZIO</code>.
        </p>
        < AutoComplete placeholder= "Write an origin" / >
        < AutoComplete placeholder= "Write a destination"/ >
        <h5 id="status"></h5>
        <div id="distances"></div>
        <div id="duration"></div>


      </div>
    );
  }
}

export default App;



/*AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
http://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters
https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ2_UmUkxNekgRqmv-BDgUvtk&destinations=place_id:ChIJdd4hrwug2EcRmSrV3Vo6llI&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
https://maps.googleapis.com/maps/api/distancematrix/json?origins=Manizales+CO&destinations=Medellin+CO&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
https://maps.googleapis.com/maps/api/distancematrix/xml?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY

*/