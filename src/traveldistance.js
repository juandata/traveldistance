import React from 'react';
import {AutoComplete} from './AutoComplete';
import {Cards} from './AutoComplete';
import {HeadTitle} from './AutoComplete';
import img0 from './img/car.png'
import img1 from './img/hiker.png'
import img2 from './img/bycicle.png'
import img3 from './img/minibus.png'



export function Traveldistance(props){
  return (
  <div>
    <p className="App-intro">
      This is a test for <code>MOZIO</code>.
    </p>
    <h1>1- Select a travel mode</h1>
    <div id="cards-container">
    < Cards  name="driving" img={img0} />
    < Cards  name="walking" img={img1}  />
    < Cards  name="bicycling" img={img2}/>
    < Cards  name="transit" img={img3}/>
    </div>
    <div>
    <HeadTitle  />
    < AutoComplete placeholder= "Write an origin" / >
    < AutoComplete placeholder= "Write a destination"/ >
    <div id="status"></div>
    <div id="answer">
    <div id="message-title"></div>
    <div id="distances"></div>
    <div id="duration"></div>
    </div>
    </div>

  </div>
  )
}
