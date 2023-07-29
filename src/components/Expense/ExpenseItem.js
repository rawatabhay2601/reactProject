import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

  const [price, setAmount] = useState(props.amount);

  const deleteHandler = () => {
    const expense = document.getElementById('expense');
    expense.remove();
  };

  const updateHandler = () => {
    const newAmount = 100;
    setAmount(newAmount);
    console.log(price);
  };

  console.log('Expense Item running');
  return (
    <div id='expense'>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${price}</div>
          <button style={{ borderRadius: '12px', marginLeft: '2px' }} onClick={updateHandler}>Update Price</button>
          <button style={{ borderRadius: '12px', marginLeft: '2px' }} onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </div>
  )
};

export default ExpenseItem;