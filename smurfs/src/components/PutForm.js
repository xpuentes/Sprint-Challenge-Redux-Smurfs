import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class PutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      },
      id: ''
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

  selectChangeHandler = e => {
    this.setState({
      id: e.target.value
    });
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf, this.state.id);
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
        <h1>Update Smurf</h1>
        <form onSubmit={this.submitHandler}>
          <select onChange={this.selectChangeHandler} value={this.state.id}>
            {this.props.smurfs.map(smurf => <option key={smurf.id} value={smurf.id}>{smurf.name}</option>)}
          </select>
          <input onChange={this.changeHandler} placeholder='Name' name='name' value={this.state.smurf.name} />
          <input onChange={this.changeHandler} placeholder='Age' name='age' value={this.state.smurf.age} />
          <input onChange={this.changeHandler} placeholder='Height' name='height' value={this.state.smurf.height} />
          <button type='submit'>Update</button>
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

export default connect(mstp, { updateSmurf: updateSmurf })(PutForm);
