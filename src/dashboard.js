import React from 'react';
import './css/dashboard.css'

export class Dashboard extends React.Component{

render(){
  return (

<div>
<span class="bckg"></span>
<header>
  <h1>Dashboard</h1>
  <nav>
    <ul>
      <li>
        <a href="javascript:void(0);" data-title="Projects">Projects</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-title="Team">Team</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-title="Diary">Diary</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-title="Timeline">Timeline</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-title="Settings">Settings</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-title="Search">Search</a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <div class="title">
    <h2>Projects</h2>
    <a href="javascript:void(0);">Hello Bob !</a>
  </div>

  <article class="larg">
    <div>
      <h3>Project 1 <span class="entypo-down-open"></span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus iste quia incidunt ad provident ullam quo assumenda expedita quae sapiente ipsa qui esse similique! Modi obcaecati natus sapiente quaerat omnis.</p>
    </div>
    <div>
      <h3>Project 2 <span class="entypo-down-open"></span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus iste quia incidunt ad provident ullam quo assumenda expedita quae sapiente ipsa qui esse similique! Modi obcaecati natus sapiente quaerat omnis.</p>
    </div>
    <div>
      <h3>Project 3 <span class="entypo-down-open"></span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus iste quia incidunt ad provident ullam quo assumenda expedita quae sapiente ipsa qui esse similique! Modi obcaecati natus sapiente quaerat omnis.</p>
    </div>
  </article>
</main>
</div>

    )
  }
}
