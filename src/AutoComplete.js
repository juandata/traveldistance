import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import './banners.css';

var places = []; let travelMode = "driving";


export class Cards extends React.Component {
  constructor(props) {
   super(props);
   //this.state = {isToggleOn: true};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
 }

  handleClick() {
    travelMode = this.props.name;
 }



render() {
  return (
    <a  className="cards" onClick={this.handleClick} >
    <div>
      <div className="card">
          <img src={this.props.img} alt={this.props.name} id="img" />
          <div className="container">
            <h4>I want to travel by <span id="mode"> {this.props.name}</span></h4>
          </div>
      </div>
     </div>
     </a>
  )
 }
}



export class AutoComplete extends React.Component {



  render() {
    return (
      <Autocomplete
      placeholder= {this.props.placeholder}
      onPlaceSelected={(place) => {

      if(places.length <= 2){
        this.props.placeholder === "Write an origin" ? places[0] = place.place_id :  places[1] = place.place_id

        }

      if(places.length === 2) {
        document.getElementById("status").innerHTML = "Fletching Distance...";
        document.getElementById("message-title").innerHTML = "";
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
          var urlField = 'https://maps.googleapis.com/maps/api/distancematrix/json?' +'mode=' + travelMode + '&origins=place_id:' + places[0] + '&destinations=place_id:' + places[1]
          + '&language=en&key=AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk';


            doCORSRequest({
              method: 'GET',
              url: urlField,
            }, function getResult(result) {
              console.log(result);
              let text = "", text0 = "", textMessage = "";
              var answer = JSON.parse(result);
              let zeroResults = answer.rows[0].elements[0].status;
              if(zeroResults === "OK"){
                let distancia = answer.rows[0].elements[0].distance.text;
                let duracion = answer.rows[0].elements[0].duration.text;
                 textMessage = "3- Check the answer : "
                text = 'The ' + travelMode + ' distance from ' + '<strong>' + answer.origin_addresses + '</strong>'+ " to " + '<strong>' + answer.destination_addresses + '</strong>' + ' is ' +
                distancia;
                text0 = 'The duration of your travel will be ' + '<strong>' + duracion + '</strong>' + ' approximately.';

              }
              else {
              textMessage = "3- Imposible travel : "
               text = "You cannot go by " + travelMode + " from " + '<strong>' + answer.origin_addresses + '</strong> to  <strong>' + answer.destination_addresses + '</strong>';
               text0 = "";
              }
            setTimeout(function(){
              document.getElementById("status").innerHTML = "";
              document.getElementById('message-title').innerHTML = textMessage;
              document.getElementById('distances').innerHTML = text;
              document.getElementById('duration').innerHTML = text0;
              console.log(travelMode);

            }, 1000);



            });

        })();
}

    } }
      />
    )
}

}
