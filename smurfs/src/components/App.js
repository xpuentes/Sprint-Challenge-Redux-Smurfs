import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name] : e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => <div><p>{smurf.name}</p><p>{smurf.age}</p><p>{smurf.height}</p></div>)}
        <form onSubmit={this.submitHandler}>
          <input placeholder='Name' onChange={this.changeHandler} name='name' value={this.state.smurf.name} />
          <input placeholder='Age' onChange={this.changeHandler} name='age' value={this.state.smurf.age} />
          <input placeholder='Height' onChange={this.changeHandler} name='height' value={this.state.smurf.height} />
          <button type='submit'>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mstp, { getSmurfs: getSmurfs, addSmurf: addSmurf })(App);
