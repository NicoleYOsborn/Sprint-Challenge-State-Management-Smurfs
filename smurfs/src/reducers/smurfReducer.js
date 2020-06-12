import { FETCH_SMURFS, ADD_SMURF, SET_ERROR } from "../actions/index";

const initialState = {
  smurfs: [],
  isFectiongData: false,
  error: ''
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false
      }
    case SET_ERROR:
      return {
        ...state,
        isFectiongData: false,
        error: action.payload 
      }    
    default:
      return state;
  }
};
