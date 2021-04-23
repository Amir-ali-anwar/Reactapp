// import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import First from './Components/First'
import Person from './Components/person'
import styled from 'styled-components'

class App extends Component {
    state = {
        persons: [
            { name: 'abc', age: 28 },
            { name: 'xzy', age: 29 },
            { name: 'Stephanie', age: 26 }

        ]
    }
    namehandler = (newname) => {
        this.setState({

            persons: [
                { name: 'fasdfs', age: 28 },
                { name: 'XYZ', age: 19 },
                { name: 'Step', age: 27 }
            ]
        })
    }
    render() {
        // console.log('render component')
        return (
            <div className="App">
        	 <First />
        	 <button onClick={this.namehandler} className="btn btn-success">Change name</button>
        	 <Person  name={this.state.persons[0].name}
          age={this.state.persons[0].age}></Person>
        	 <Person  name={this.state.persons[1].name}
          age={this.state.persons[1].age}></Person>
        	 <Person  name={this.state.persons[2].name}
          age={this.state.persons[2].age}></Person>

        	</div>
        );
    }
}

export default App;