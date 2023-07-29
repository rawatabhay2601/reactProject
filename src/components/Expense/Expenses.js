import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {

  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { 
  //     id: 'e2',
  //     title: 'New TV',
  //     amount: 799.49,
  //     date: new Date(2021, 2, 12)
  //   },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear() == filteredYear;
  });

  console.log('expenses this is : ', filteredExpense);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  )
};

export default Expenses;