import React, { Component } from 'react';
import {Fragment} from 'react';

const person =(prop) =>{
	return(
		<Fragment>
		<div className="container">
		<div className="person-main-set mt-4">
		<input className="form-control form-set"/>
		</div>
		<div className="person-main mt-2">
		<p onClick={prop.click}>I am <b>{prop.name} and my age is {prop.age}</b></p>
		
		<p> <b>	{prop.children}</b></p>
		</div>
		</div>
		</Fragment>
		) 

}
export default person