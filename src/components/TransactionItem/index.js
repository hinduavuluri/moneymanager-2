// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
