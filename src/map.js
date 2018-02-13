// eslint-disable-next-line
import React, {Component} from 'react';
import {Formulario} from './experimentos'
import './css/main.css';

function Reloj(props){
  return <h3> It is {props.hora.toLocaleTimeString()}.</h3>;
}

class Encender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {encendido : false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      encendido : !prevState.encendido
    }));
  }


  render() {
    return (
      <div>
      <button onClick={this.handleClick} style={{cursor : 'pointer'}}>
      {this.state.encendido ? 'ON' : 'OFF'}
      </button><br />
      <Formulario />
      </div>
    )
  }

}



export class Mapa extends React.Component {
constructor(props){
  super(props);
  this.state = { date : new Date()};
}

componentDidMount() {
    this.timerID = setInterval(
      () => this.ticTac(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  ticTac(){
      this.setState( {date : new Date()} );
  }

  render(){
    return (
      <main>
      <div className="section-article">
      <section>Section Mapa</section>
      <article>Article</article>
      </div>
      <aside style={{overflow : "scroll"}}>
      <Reloj hora = {this.state.date}/>
      <Encender />
      </aside>
      </main>
    )
  }
}
