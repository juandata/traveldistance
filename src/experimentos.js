import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
//testing a simple add function
 function restar(a,b){
  return a - b;
}
//exportar la funcion a probar con jest
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function VeredictoTemperatura(props){

  if(props.celsius >= 100 ){
       return <h3>Está hirviendo</h3>
  }
  return  <h3>Aún no hierve</h3>

}


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }





  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {value : 'coconut'};
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleClick(e){
    this.setState({ value : e.target.value});
  }
handleSubmit(e){
  alert("Tu sabor favorito es : " + this.state.value);
  e.preventDefault();
}
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Escoge tu color favorito: </h3>
      <select value={this.state.value} onChange={this.handleClick}>
  <option value="grapefruit"  >Grapefruit</option>
  <option value="lime" >Lime</option>
  <option  value="coconut"  >Coconut</option>
  <option value="mango" >Mango</option>
</select>
<input type="submit" value="enviar" />
</form>
    )
  }
}

export class Formulario extends React.Component {



  constructor(props){
    super(props);
    this.state = { texto : 'First Name', texto2 :"Ocupation", temperature: '', scale: 'c'}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);



  }
  handleChange(e){
    e.target.name === "First Name" ? this.setState({texto : e.target.value.toUpperCase()}) : this.setState({texto2 : e.target.value})

  }

handleSubmit(e){
  alert("submited the next info: First Name = " + this.state.texto + "Ocupation" + this.state.texto2);
  e.preventDefault();
}
handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
 /////



  render(){
   const scale = this.state.scale;
   const temperature = this.state.temperature;
   const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
   const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
      <div>
      <form  onSubmit= {this.handleSubmit} >
      <input type="text" name="First Name" value={this.state.texto} onChange={this.handleChange}/>
      <input type="text" name="Ocupation" value={this.state.texto2} onChange={this.handleChange}/>
        <textarea value={this.state.texto2}></textarea>
        <h3>{ this.state.texto === 'First Name' ? 'Input will appear here' :  this.state.texto}</h3>
        <input type="submit" value="enviar"/>
      </form>
      <Select />
      <div>
      <h6>Cambiar temperatura</h6>
      <div>
       <TemperatureInput
         scale="c"
         temperature={celsius}
         onTemperatureChange={this.handleCelsiusChange} />

       <TemperatureInput
         scale="f"
         temperature={fahrenheit}
         onTemperatureChange={this.handleFahrenheitChange} />

       <VeredictoTemperatura
         celsius={parseFloat(celsius)} />

     </div>

      </div>
      </div>

    )
  }

}
