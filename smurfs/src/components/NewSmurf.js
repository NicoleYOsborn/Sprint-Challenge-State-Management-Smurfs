import React, { useState} from 'react';
import {connect} from 'react-redux'
import {addSmurf} from '../actions/index';

const initialState = {
    name: '',
    age: '',
    height: ''
}


const NewSmurf = () =>{
    const [newSmurf, setData] = useState(initialState);

    const handleChanges = e => {
        console.log(e.target.value)
       let name = e.target.name
       setData({...newSmurf, [name]: e.target.value})
    }

    const handleAddSmurf = e =>{
        e.preventDefault();
        // console.log(props);
        addSmurf(newSmurf);
        setData(initialState);
    }
    return(   
    <div className = 'card'>
        <header>
        <h1>Add a new smurf!</h1>
        </header>
        <div>

            <div>
                <label htmlFor='name'>Name:</label>  
                <input
                type='text'
                name='name'
                value={newSmurf.name}
                onChange = {handleChanges}
                />
            </div>

            <div>
                <label htmlFor='age'>Age:</label>  
                <input
                type='text'
                name='age'
                value={newSmurf.age}
                onChange = {handleChanges}
                />
            </div>

            <div>
                <label htmlFor='height'>Height:</label>  
                <input
                type='text'
                name='height'
                value={newSmurf.height}
                onChange = {handleChanges}
                />
            </div>
        </div>
        <button onClick = {handleAddSmurf}>Add Smurf</button> 
      </div>
)}

// const mapStateToProps = state =>{
//   return {
//     smurfs: state.smurfs
       
// }}

export default connect(null, {addSmurf})(NewSmurf);