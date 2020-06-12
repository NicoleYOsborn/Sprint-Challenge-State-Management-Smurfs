import React, {useReducer, useState} from 'react';
import {connect} from 'react-redux'
import {addSmurf} from '../actions/index';

const initialState = {
    name: '',
    age: '',
    height: ''
}


const NewSmurf = props =>{
    const [data, setData] = useState(initialState);

    const handleChanges = e => {
        setData(e.target.value);
    }

    const handleAddSmurf = e =>{
        e.preventDefault();
        props.addSmurf(data);
    }
    return(   
    <div className = 'card'>
        <header>
        <h1>Add a new smurf!</h1>
        </header>
        <div>

            <div>
                <label htmlFor='smurfName'>Name:</label>  
                <input
                type='text'
                name='smurfName'
                value={data.smurfName}
                onChange = {handleChanges}
                />
            </div>

            <div>
                <label htmlFor='age'>Age:</label>  
                <input
                type='text'
                name='age'
                value={data.age}
                onChange = {handleChanges}
                />
            </div>

            <div>
                <label htmlFor='height'>Height:</label>  
                <input
                type='text'
                name='height'
                value={data.height}
                onChange = {handleChanges}
                />
            </div>
        </div>
        <button onClick = {handleAddSmurf}>Add Smurf</button> 
      </div>
)}

const mapStateToProps = state =>{
  return {
    name: state.smurfName,
    age: state.age,
    height: state.height
}
}

export default connect(mapStateToProps, {addSmurf})(NewSmurf);