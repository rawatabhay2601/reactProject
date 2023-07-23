import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

  const deleteHandler = () => {
    const expense = document.getElementById('expense');
    expense.remove();
    console.log('deleted !!');
  }

  return (
    <div id='expense'>
      <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
              <button style={{borderRadius:'12px', marginLeft:'3px'}} onClick={deleteHandler}>Delete</button>
          </div>
      </Card>
    </div>
  );
};

export default ExpenseItem;