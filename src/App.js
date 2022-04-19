import React, { useState } from "react";

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const Calculator = () => {
    // const [val, setVal] = useState("");

    return (
        <AppProvider>
            <div>
                <div className="container my-2">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-5 fw-bolder text-center
                        text primary">Budgeting Apps</h1>
                            <hr />
                        </div>
                        <div className="col-12">
                            <h5 className="text-center
                        text primary">Here to help you record your finances!</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        <div className='col-sm'>
                            <RemainingBudget />
                        </div>
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    </div>
                    <h3 className='mt-3'>Expenses</h3>
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3'>Add Expense</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AddExpenseForm />
                        </div>
                    </div>
                    
                </div>
            </div>
        </AppProvider>
    );
};

export default Calculator;