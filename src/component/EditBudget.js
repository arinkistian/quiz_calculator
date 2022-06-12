import React, { Component, useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
    
        return (
            <div className="card card-body mb-3">
                <label>Your Budget</label>
                <form className="form-inline">
                    <input 
                        required='required'
                        type='number'
                        class='form-control mr-3'
                        id='name'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    
}

export default EditBudget