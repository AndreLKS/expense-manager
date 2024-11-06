import React, { useState } from 'react';
import axios from 'axios';

function ExpenseFilter({ onFilter }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFilter = () => {
        axios.get(`https://api.banco.com/transactions?start_date=${startDate}&end_date=${endDate}`)
            .then(response => onFilter(response.data))
            .catch(error => console.error("Erro ao filtrar dados:", error));
    };

    return (
        <div>
            <h3>Filtrar Gastos</h3>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={handleFilter}>Filtrar</button>
        </div>
    );
}

export default ExpenseFilter;
