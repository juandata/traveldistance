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


  var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, getResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      getResult(
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/json');
    }
    x.send(options.data);
  }

  // Bind event
  (function() {
    var urlField = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ2_UmUkxNekgRqmv-BDgUvtk&destinations=place_id:ChIJdd4hrwug2EcRmSrV3Vo6llI&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk';


      doCORSRequest({
        method: 'GET',
        url: urlField,
      }, function getResult(result) {
        var answer = JSON.parse(result);
        console.log(answer.destination_addresses);


      });

  })();




      /*var distance = require('google-distance-matrix');

      var origins = ['San Francisco CA'];
      var destinations = ['New York NY', '41.8337329,-87.7321554'];
      var key = 'AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk';

      distance.matrix(origins, destinations, key, function (err, distances) {
          if (!err)
              console.log(distances);
      })



        var googleMaps = require('@google/maps').createClient({
  key: 'AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk'
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
   })*/


    } }
      />
    )
}

}
