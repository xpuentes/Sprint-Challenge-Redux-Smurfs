import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import PostForm from './PostForm';
import PutForm from './PutForm';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
        <PostForm />
        <PutForm />
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mstp, { getSmurfs: getSmurfs })(App);
