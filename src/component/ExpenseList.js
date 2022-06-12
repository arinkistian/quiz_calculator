import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setfilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value)
        );
        setfilteredExpenses(searchResults);
    };

    return (
        <div className="card mt-5">
            <input
                type='text'
                class='form-control mb-2 mr-sm-2'
                placeholder='Type to search...'
                onChange={handleChange}
            />
            <table className="table-bordered">
                <thead>
                    <tr>
                        <ul class='list-group mt-3 mb-3'>
                            {filteredExpenses.map((expense) => (
                                <ExpenseItem
                                    id={expense.id}
                                    name={expense.name}
                                    cost={expense.cost}
                                />
                            ))}
                        </ul>
                    </tr>
                </thead>
                <tbody>

                </tbody>

            </table>
        </div>
    )
}

export default ExpenseList
