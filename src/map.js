// eslint-disable-next-line
import React, {Component} from 'react';
import './css/main.css';

function Reloj(props){
  return <h1> It is {props.hora.toLocaleTimeString()}.</h1>;
}



export class Mapa extends React.Component {
constructor(props){
  super(props);
  this.state = { date : new Date()};
}

  //lyfecicle hooks
  /*
  componentDidMount(){
  this.timerID = setInterval(function(){
    this.ticTac();
  }, 1000);
}*/
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
      <aside>
      <Reloj hora = {this.state.date}/>
      </aside>
      </main>
    )
  }
}
