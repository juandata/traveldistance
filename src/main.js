import React from 'react';
import './css/main.css';
export class Main extends React.Component {
  render(){
    return (
      <main>
      <div className="section-article">
      <section>Main Section</section>
      <article>Article</article>
      </div>
      <aside>Aside</aside>
      </main>
    )
  }
}

export class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.loadXMLDoc = this.loadXMLDoc.bind(this);
}

loadXMLDoc(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "serverFiles/texto.txt", true);
  xhttp.send();
}
  render() {
    return (
      <main>
      <div className="section-article" style={{height : '100%', width: '100%'}}>
      <section style={{height : '100%'}}>Section About Me
      <h2>Using the XMLHttpRequest Object</h2>

    <div>
    <button type="button" onClick={this.loadXMLDoc}>Change Content</button>
    </div>
    <div  id="demo">el texto aparecerá acá </div>
      </section>
      </div>
      </main>
    )
  }
}
