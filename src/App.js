import React, { Component } from 'react';
import Person from './Person/Person';
import { Button, Container } from 'semantic-ui-react';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Daniel', age: 28 },
        { name: 'Jason', age: 48 },
        { name: 'Eunice', age: 38 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Container className="main">
          <h1>Hi, I'm a React App</h1>
          <Button onClick={this.switchNameHandler} content='Switch Name'></Button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}>This is Children of Person
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        </Container>
      </div>
    );
  }
}

export default App;
