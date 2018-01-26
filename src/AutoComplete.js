import React from 'react';
import Autocomplete from 'react-google-autocomplete';
var places = [];
export class AutoComplete extends React.Component {



  render() {
    return (
      <Autocomplete
      style={{width: '90%'}}
      placeholder= {this.props.placeholder}
      onPlaceSelected={(place) => {

      if(places.length <= 2){
        this.props.placeholder === "Write an origin" ? places[0] = place.place_id :  places[1] = place.place_id

        }

      if(places.length === 2) {
        document.getElementById("status").innerHTML = "Fletching Distance...";
        document.getElementById("distances").innerHTML = "";
        document.getElementById('duration').innerHTML = "";


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
          var urlField = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:' + places[0] + '&destinations=place_id:' + places[1]
          + '&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk';


            doCORSRequest({
              method: 'GET',
              url: urlField,
            }, function getResult(result) {
              console.log(result);
              let text = ""; let text0 = "";
              var answer = JSON.parse(result);
              let zeroResults = answer.rows[0].elements[0].status;
              if(zeroResults === "OK"){
                let distancia = answer.rows[0].elements[0].distance.text;
                let duracion = answer.rows[0].elements[0].duration.text;
                text = 'The driving distance from ' + '<strong>' + answer.origin_addresses + '</strong>'+ " to " + '<strong>' + answer.destination_addresses + '</strong>' + ' is ' +
                distancia;
                text0 = 'The duration of your travel will be ' + '<strong>' + duracion + '</strong>' + ' approximately.';

              }
              else {
               text = "You cannot drive from " + '<strong>' + answer.origin_addresses + '</strong> to  <strong>' + answer.destination_addresses + '</strong>';
               text0 = "";
              }
            setTimeout(function(){
              document.getElementById("status").innerHTML = "";
              document.getElementById('distances').innerHTML = text;
              document.getElementById('duration').innerHTML = text0;

            }, 1000);



            });

        })();
}

    } }
      />
    )
}

}
