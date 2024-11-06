import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Chame a API bancária para buscar as transações
        axios.get('https://api.banco.com/transactions') // Substitua pelo endpoint real
            .then(response => setExpenses(response.data))
            .catch(error => console.error("Erro ao buscar dados da API:", error));
    }, []);

    return (
        <div>
            <h2>Gastos Recentes</h2>
            {expenses.map(expense => (
                <div key={expense.id}>
                    <p>Descrição: {expense.description}</p>
                    <p>Valor: {expense.amount}</p>
                    <p>Data: {expense.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
