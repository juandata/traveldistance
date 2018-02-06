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
  render() {
    return (
      <main>
      <div className="section-article" style={{height : '100%', width: '100%'}}>
      <section style={{height : '100%'}}>Section About Me</section>
      </div>
      </main>
    )
  }
}
