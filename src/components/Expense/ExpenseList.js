import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    let msg = '';

    if(props.items.length === 1) {
        msg = <h2 className='expenses-list__fallback'>Only One Expense Left !!</h2>;
    }
    else if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expense Added !!</h2>;
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map(expense => {
                    return (
                    <div>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        ></ExpenseItem>
                    </div>
                    )
                })
            }
            {msg}
        </ul>
    )
};

export default ExpenseList;