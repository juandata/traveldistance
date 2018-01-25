//import the GoogleApiWrapper
 import {GoogleApiWrapper} from 'google-maps-react'
//pass the google info as props to the Map
 <EarthquakesMap google={this.props.google} />
//export the container WITHIN the GoogleApiWrapper
 export default GoogleApiWrapper({
   apiKey: 'AIzaSyDn8ctUY9eDqqGCpEFt_vI858za3n2RsXk',
   libraries: ['visualization']
 })(EarthquakesContainer)
