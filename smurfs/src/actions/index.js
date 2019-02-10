/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: FETCH_SMURFS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const addSmurf = (newSmurf) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const deleteSmurf = (id) => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_SMURF,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const updateSmurf = (updatedSmurf, id) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
    .then(response => {
      dispatch({
        type: UPDATE_SMURF,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}
