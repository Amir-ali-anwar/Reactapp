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
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   const value1= this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  const value2= this.state.value;
    list.push(value2);
      alert('A name was submitted: ' + this.state.value);
   
  }

	 render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for</h1>
        <ul className="list-none fist-list-set">
        {
          list.map((item)=>(
          <li key={item.id}><span>{item.name}</span>  
         
          </li>
          ))} 
          <div class="container">
           <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control form-set" />
          <input type="submit" value="Add shopping item"  class="btn btn-dark"/>
        </form>  
          <button type="button" class="btn btn-danger ml-3" onClick={this.removehandler}>Delete</button>
          </div>
         </ul>
      </div>
    );
  }
}

 export default first