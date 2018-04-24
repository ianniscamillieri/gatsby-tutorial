import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 5,
            })
          }
        >
          plus 5
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 2,
            })
          }
        >
          minus 2
        </button>
        <p>
          <Link to="/">Back Homepage</Link>
        </p>
      </div>
    )
  }
}

export default Counter
