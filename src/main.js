import React from 'react';
import './css/main.css';

export class Main extends React.Component {
  render(){
    return (
      <main>
      <div className="section-article">
      <section>Section</section>
      <article>Article</article>
      </div>
      <aside>Aside</aside>
      </main>
    )
  }
}
