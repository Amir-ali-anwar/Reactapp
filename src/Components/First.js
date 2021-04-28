import React, { Component } from 'react';
import './person.css';
const list=[
  {
    id:1,
    name:'abc',

  },
  {
    id:2,
    name:'abcd',

  },
  {
    id:3,
    name:'abv',

  },
  {
    id:4,
    name:'abcer',

  },
]


class first extends React.Component{

removehandler=(list)=>{
console.log(list)
}

	 render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for</h1>
        <ul className="list-none fist-list-set">
        {
          list.map((item)=>(
          <li key={item.id}><span>{item.name}</span> 
          <button type="button" class="btn btn-dark" onClick={this.removehandler}>Delete</button>
          </li>
          ))} 
        </ul>
      </div>
    );
  }
}

 export default first