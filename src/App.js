import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TravelDistance app test by Juan David Arce </h1>
        </header>
        <p className="App-intro">
          This is a test for <code>MOZIO</code>.
        </p>
      </div>
    );
  }
}

export default App;



/*AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
http://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters
https://maps.googleapis.com/maps/api/distancematrix/json?origins=Manizales+CO&destinations=Medellin+CO&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
https://maps.googleapis.com/maps/api/distancematrix/xml?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY

*/
