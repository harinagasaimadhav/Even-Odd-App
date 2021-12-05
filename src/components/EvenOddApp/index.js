// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0
    return (
      <div className="outer-container">
        <div className="main-container">
          <h1 className="title">Count {count}</h1>
          {isEven ? (
            <p className="result">Count is Even</p>
          ) : (
            <p className="result">Count is Odd</p>
          )}
          <button onClick={this.onIncrement} className="button" type="button">
            Increment
          </button>
          <p className="disclaimer">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
