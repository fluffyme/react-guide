import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    persons: [
      { name: 'Max', age: 32 },
      { name: 'Stef', age: 30 },
      { name: 'Lex', age: 34 }
    ], otherState: 'gjknljkhnjkfdvh jghjkb',
    showPersons: false,
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 32 },
        { name: event.target.value, age: 30 },
        { name: 'Lex', age: 34 }
      ]
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

 tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({
      persons: [
        { name: 'Max', age: 32 },
        { name: 'Stef', age: 30 },
        { name: 'Lex', age: 34 }
      ],
      showPersons : !doesShow
    }) 
  }
 
  render(){
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>
          })}
        </div>
        );
    }
  
    return (
  
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
  
        <button style={style} onClick={this.tooglePersonsHandler}>Toogle Name</button>
        
        {persons}
    
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'my new component'));
  }
  
}

export default App;