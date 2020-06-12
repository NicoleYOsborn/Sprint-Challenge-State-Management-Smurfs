import React from 'react';
import {connect} from 'react-redux'
import {getData} from '../actions/index'

const SmurfList = props =>{
  return (
  <div className='list'>
  {props.error ? (
    <div className="error">{props.error}</div>
  ) : (
    props.smurfs.map(smurf => 
    <div className='card'>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}, Height: {smurf.height}</p>
  </div>
  )
  )}
  </div>
  )
}

const mapStateToProps = state =>{
  return{
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {getData})(SmurfList);