import React from 'react';
import {Traveldistance} from './traveldistance';
import GoogleMapReact from 'google-map-react';

import './css/main.css';
import './css/DistanceCalculation.css';

export class DistanceCalculation extends React.Component {
    compponentDidMount(){

}


  render(){
    return (
      <main id="main-distance">
      <div className="section-article section-article-distance" >
      <section id="section-distance" style={{height: '100%'}}><Traveldistance /></section>
      </div>
      <aside id="aside-distance">
      <GoogleMapReact
        defaultCenter={[5.073183059022209, -75.52438628784944]}
       defaultZoom= {12}
     >
     </GoogleMapReact>
      </aside>
      </main>
    )
  }
}
