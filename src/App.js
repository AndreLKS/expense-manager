import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App() {
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    return (
        <div>
            <h1>Gestão de Gastos</h1>
            <ExpenseFilter onFilter={setFilteredExpenses} />
            <ExpenseList expenses={filteredExpenses} />
        </div>
    );
}

export default App;
