import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const SmurfList = (props) => {
  return (
    <div>
      {props.smurfs.map(smurf => <Smurf smurf={smurf} deleteSmurf={props.deleteSmurf}/>)}
    </div>
  );
}

const mstp = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mstp, { deleteSmurf: deleteSmurf })(SmurfList);
