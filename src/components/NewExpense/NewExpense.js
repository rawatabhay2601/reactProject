import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random()*10000)
    };
    props.onAddExpense(expenseData);
    
    // to make the form disappear after submiting
    setEditing(false);
  };

  const editingHandler = () => {
    setEditing(true);
  };

  const cancelHandler = () => {
    setEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={editingHandler}>Open Expense Form</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler} />}
    </div>
  );
};

export default NewExpense;