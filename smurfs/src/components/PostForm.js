import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
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
    })
  }

  render(){
    return (
      <div>
        <h1>Add Smurf</h1>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} placeholder='Name' name='name' value={this.state.smurf.name} />
          <input onChange={this.changeHandler} placeholder='Age' name='age' value={this.state.smurf.age} />
          <input onChange={this.changeHandler} placeholder='Height' name='height' value={this.state.smurf.height} />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf: addSmurf })(PostForm);
