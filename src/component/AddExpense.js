import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const backspace = () => {
        try {
            setCost(cost.slice(0, -1))
        } catch (error) {
            setCost("")
        }
    }

    const calculate = () => {
        try {
            setCost(eval(cost));
        } catch (error) {
            setCost("Error")
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };


    return (
        <div className="card card-body">
            <form onSubmit={onSubmit}>
                <label>Nama</label>
                <input
                    required='required'
                    type='text'
                    class='form-control'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label>Pengeluaran</label>
                <input
                    required='required'
                    type='number'
                    class='form-control'
                    id='cost'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                />
                <button className="btn btn-dark btn-block mt-3" type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddExpense