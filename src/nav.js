import React from 'react';
import './css/nav.css'


const menuPages =  ['Home', 'Distance Calculator' , 'Map' , 'About me'];
var menu = [];

 export class Nav extends React.Component{
   constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
      }
  handleClick(e){
    this.props.onChange( e.target.id);
    /*setTimeout(function(){
      console.log(window.location.href)
    },1000);*/
  }

render() {
   menu = menuPages.map(page => {
         return (
           <li>
             <a  href= {"#" + page} id={page} onClick={this.handleClick}  >
             {page}
             </a>
           </li>
           )
     });
   return menu;
       }

}
