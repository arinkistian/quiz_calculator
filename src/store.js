import React, { Component } from 'react';

const BudgetContext = React.createContext();

class BudgetProvider extends Component {

    state = {
        budget: 10000,
        expenses: [
            { title: 'tuition fee', amount: 5000},
            { title: 'ticket fee', amount: 1000},
            {title: 'buy car', amount: 2000}
         ]
    }
    render() {
        return(
            <BudgetContext.Provider value={this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer }