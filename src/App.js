/*eslint eqeqeq:0*/
import React, { Component } from 'react';
import logo from './logo.svg';
import {Head} from './Head';
import {Main} from './main';
import {AboutMe} from './main';
import {Nav} from './nav';

import {DistanceCalculation} from './distanceCalculation';
import {Mapa} from './map';

import './css/App.css';
let display = null;


class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
     this.changeName = this.changeName.bind(this);
  }
  //updates this state with onChange value inherited from nav.js
  changeName(newName) {
   this.setState({
     name: newName
   });
 }

componentWillMount(){
  //update current view with url link (deep linking)
  switch (window.location.href) {
    case 'http://localhost:3000/#Home':  display = <Main />; break;
    case 'http://localhost:3000/#Distance Calculator' : display = <DistanceCalculation />; break;
    case 'http://localhost:3000/#Distance%20Calculator' : display = <DistanceCalculation />; break;/*Mozilla*/
    case 'http://localhost:3000/#Map' : display = <Mapa />; break;/*Mozilla*/
    case 'http://localhost:3000/#About me' : display = <AboutMe />; break;
    case 'http://localhost:3000/#About%20me' : display = <AboutMe />; break;/*Mozilla*/
    default :   display = <Main />;
  }
}

//56 949 322 673
responsiveMenu(e){
   var x = document.getElementById("ul");  let icono = document.getElementById('icon');
   if (x.className === "topnav") {
       x.className += " responsive";
       icono.style.position = 'inherit';

   } else {
       x.className = "topnav";
       icono.style.position = 'absolute';
   }
   e.preventDefault();
 }




  render() {
      //rerender view when component state changes
     switch (this.state.name){
       case 'Home': display = <Main />; break;
       case 'Distance Calculator':  display = <DistanceCalculation />; break;
       case 'Map':  display = <Mapa />; break;
       case 'About me':  display = <AboutMe />; break;



     }

    return (
      <div className="App">
      <Head />
        <div id="body" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <em>TravelDistance app</em> test by <a href="http://juandavidarce.co/"target="_blank" rel="noopener noreferrer">Juan David Arce </a></h1>
        </header>
        <div className="stage">
        <nav><ul id="ul" className='topnav'><Nav name={this.state.name}onChange={this.changeName} /></ul>
         <div><a href="#" className="icon" id="icon" onClick={this.responsiveMenu}>&#9776;</a></div>
         </nav>
        {display}

        <footer></footer>
        </div>
        </div>
        <footer>
        This is the footer content
        </footer>


      </div>
    );
  }
}

export default App;



/*

<Traveldistance />
AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
http://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters
https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ2_UmUkxNekgRqmv-BDgUvtk&destinations=place_id:ChIJdd4hrwug2EcRmSrV3Vo6llI&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
https://maps.googleapis.com/maps/api/distancematrix/json?origins=Manizales+CO&destinations=Medellin+CO&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk
https://maps.googleapis.com/maps/api/distancematrix/xml?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY

*/
