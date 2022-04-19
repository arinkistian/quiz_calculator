import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
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
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>

			<div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3 pt-3 shadow">
                                <div class="card-body txt primary">
                                    <input type="text" className="form-control form-control-lg mb-4
                                text-center bg-light fs-4 text-primary shadow"
                                        value={cost} onChange={(e) => setCost(e.target.value)} />

                                    <div className="row">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="1" onClick={(e) => setCost(cost + e.target.value)}>1</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="2" onClick={(e) => setCost(cost + e.target.value)}>2</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="3" onClick={(e) => setCost(cost + e.target.value)}>3</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow px-2 py-4 fs-4"
                                                value="C" onClick={() => backspace()}>C/CE</button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="4" onClick={(e) => setCost(cost + e.target.value)}>4</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="5" onClick={(e) => setCost(cost + e.target.value)}>5</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="6" onClick={(e) => setCost(cost + e.target.value)}>6</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="+" onClick={(e) => setCost(cost + e.target.value)}>+</button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="7" onClick={(e) => setCost(cost + e.target.value)}>7</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="8" onClick={(e) => setCost(cost + e.target.value)}>8</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="9" onClick={(e) => setCost(cost + e.target.value)}>9</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="*" onClick={(e) => setCost(cost + e.target.value)}>X</button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="0" onClick={(e) => setCost(cost + e.target.value)}>0</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="=" onClick={() => calculate()}>=</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="-" onClick={(e) => setCost(cost + e.target.value)}>-</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-4"
                                                value="/" onClick={(e) => setCost(cost + e.target.value)}>/</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
		</form>
	);
};

export default AddExpenseForm;
