import React from 'react';
import {connect} from 'react-redux';

import {getData} from '../actions/index';

const SmurfForm = props =>{

  const handleGetData = e =>{
    e.preventDefault();
    props.getData();
  }

  return (
  <>
  {props.isFetchingData ? (
    <div>** We are fetching Smurf data!**</div>
  ) : (
  <button onClick ={handleGetData}>See Smurfs</button>
  )}
  </>
  )
};

const mapStateToProps = state =>{
  return {
    isFetchingData: state.isFetchingData
  }
}

export default connect(mapStateToProps, {getData})(SmurfForm);