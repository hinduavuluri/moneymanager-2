import {Component} from 'react'
import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedList = transactionList.filter(eachItem => eachItem.id !== id)
    this.setState({transactionList: updatedList})
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      } else {
        expensesAmount += eachItem.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      optionId: transactionTypeOptions[0].optionId,
      titleInput: '',
      amountInput: '',
    }))
  }

  changeInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  changeOption = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    const balanceAmount = this.getBalance()
    const incomAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="header-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="text">
            Welcome back to your <span className="sub-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomAmount={incomAmount}
          expenseAmount={expensesAmount}
        />
        <div className="card">
          <div className="input-container">
            <h1 className="sub-heading">Add Transaction</h1>
            <form onSubmit={this.addTransaction}>
              <label htmlFor="title" className="title-input">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                value={titleInput}
                className="title-input"
                onChange={this.changeInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                value={amountInput}
                className="title-input"
                onChange={this.changeAmount}
              />
              <label htmlFor="type">TYPE</label>
              <select id="type" onChange={this.changeOption} value={optionId}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </form>
            <button type="submit" className="button">
              Add
            </button>
          </div>
          <div className="transaction-container">
            <h2 className="history">History</h2>
            <div className="head-bar">
              <p className="title-input">Title</p>
              <p className="title-input">Amount</p>
              <p className="title-input">Type</p>
            </div>
            <ul>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
