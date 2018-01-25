import React from 'react';
import Autocomplete from 'react-google-autocomplete';

export class AutoComplete extends React.Component {



  render() {
    return (
      <Autocomplete
      style={{width: '90%'}}
      placeholder= {this.props.placeholder}
      onPlaceSelected={(place) => {
      console.log(place.place_id);

      var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk'
});
var googleMaps = require('@google/maps').createClient({
key: 'AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk'
});

// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
googleMaps.distanceMatrix({
     origins: [
       'Perth, Australia', 'Sydney, Australia', 'Melbourne, Australia',
       'Adelaide, Australia', 'Brisbane, Australia', 'Darwin, Australia',
       'Hobart, Australia', 'Canberra, Australia'
     ],
     destinations: [
       'Uluru, Australia', 'Kakadu, Australia', 'Blue Mountains, Australia',
       'Bungle Bungles, Australia', 'The Pinnacles, Australia'
     ]
   },  function(err, response) {
     if (!err) {
       console.log(response.json.results);
     }
   }

 );




      /*
      https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk

      var distance = require('google-distance-matrix');

      var origins = ['San Francisco CA', '40.7421,-73.9914'];
      var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];

      distance.key('AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk');
      distance.units('imperial');

      distance.matrix(origins, destinations, function (err, distances) {
      if (err) {

          return console.log(err);
      }
      if(!distances) {
          return console.log('no distances');
      }
      if (distances.status == 'OK') {
          for (var i=0; i < origins.length; i++) {
              for (var j = 0; j < destinations.length; j++) {
                  var origin = distances.origin_addresses[i];
                  var destination = distances.destination_addresses[j];
                  if (distances.rows[0].elements[j].status == 'OK') {
                      var distance = distances.rows[i].elements[j].distance.text;
                      console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                  } else {
                      console.log(destination + ' is not reachable by land from ' + origin);
                  }
              }
          }
      }
      });
      */






    } }
      />
    )
}
}
