import React from 'react';
import './css/nav.css'


const menuPages =  ['Home', 'Distance Calculator' , 'Map' , 'About me'];
var menu = [];

 export class Nav extends React.Component{
   constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
      }
      //get current id of li and updates current active li and inactive li
  handleClick(e){
    this.props.onChange( e.target.id);//updates this prop call onChange which will receive the value of e in app.js
    let list = document.getElementsByClassName('a');
    for (var item=0; item < list.length; item ++){
      list[item].style.backgroundColor = '#222';
    }

    document.getElementById(e.target.id).style.backgroundColor = '#555';

  }

render() {
   menu = menuPages.map(page => {
         return (
           <li >
             <a className="a" href= {"#" + page} id={page} onClick={this.handleClick}  >
             {page}
             </a>
           </li>
           )
     });
   return menu;
       }

}
