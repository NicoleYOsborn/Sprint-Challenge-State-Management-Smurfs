import { FETCH_SMURFS, SET_ERROR, DISPLAY_SMURFS, ADD_SMURF } from "../actions/index";

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
    case DISPLAY_SMURFS:
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
    case ADD_SMURF:
        return{
         ...state,
            smurfs: action.payload
        }       
    default:
      return state;
  }
};
