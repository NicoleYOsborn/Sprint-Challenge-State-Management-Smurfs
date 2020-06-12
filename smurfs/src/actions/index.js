import axios from 'axios';

export const FETCH_SMURFS = 'GET_DATA';
export const DISPLAY_SMURFS = 'DISPLAY_SMURFS';
export const SET_ERROR ='SET_ERROR';
export const ADD_SMURF = 'ADD_SMURF'


export const getData = () => dispatch => {
  dispatch({type: FETCH_SMURFS});
  axios.get('http://localhost:3333/smurfs')
    .then (res => {
      console.log(res);
      dispatch({type: DISPLAY_SMURFS, payload: res.data})
      })
    .catch(err => {
      console.error('error fetching data from api. err: ', err);
    dispatch({type: SET_ERROR, payload: 'error fetching data from api'})
    })
  };

export const addSmurf = (newSmurf) => dispatch => {
    dispatch({type: ADD_SMURF});
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((res)=>{
        console.log(res);
        
    })
    .catch(err => {
        console.error('error posting data to api. err: ', err);
      dispatch({type: SET_ERROR, payload: 'error posting data to api'})
      })    
        
}