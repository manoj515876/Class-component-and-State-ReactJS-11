import {Component} from 'react'
import './index.css'

class Counter extends Component {
  onIncrement = () => {
    this.setState(preState => {
      return {count: preState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(preState => {
      return {count: preState.count - 1}
    })
  }
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
