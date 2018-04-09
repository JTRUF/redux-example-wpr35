import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addGuest, removeGuest} from './ducks/partyList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.newGuest = this.newGuest.bind(this);
  }

  newGuest() {
    this.props.addGuest(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    let partyGuests = this.props.list.map( (person, i) => {
      return <p key={i}>{person} <button onClick={() => this.props.removeGuest(i)}>Delete</button></p>
    })
    return (
      <div className="App">
        <h1>My Party List</h1>
        <input 
          value={this.state.input}
          onChange={(e)=> this.setState({input:e. target.value })} 
        />
        <button onClick={this.newGuest}>Add guest</button>
        {partyGuests}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App)
