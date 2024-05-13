// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="container">
      <div className="balance-container">
        <div className="image-container1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="balance-icon"
            alt="balance"
          />
        </div>
        <p className="text">Your Balance</p>
        <p className="amount" data-testid="balanceAmount">
          Rs {balanceAmount}
        </p>
      </div>

      <div className="balance-container2">
        <div className="image-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="balance-icon"
            alt="income"
          />
        </div>
        <p className="text">Your Income</p>
        <p className="amount" data-testid="incomeAmount">
          Rs {incomeAmount}
        </p>
      </div>

      <div className="balance-container3">
        <div className="image-container3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="balance-icon"
            alt="expenses"
          />
        </div>
        <p className="text">Your Expenses</p>
        <p className="amount" data-testid="expensesAmount">
          Rs {expensesAmount}
        </p>
      </div>
    </div>
  )
}

export default MoneyDetails
