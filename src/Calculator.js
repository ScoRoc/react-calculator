import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
      oldNumber: 0,
      currentNumber: 0,
      calcNum1: 0,
      calcNum2: 0,
      operator: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  updateCurrentNumber(num) {
    this.setState({
      currentNumber: this.state.currentNumber.toString() + num.toString()
    })
  }

  sum(a, b) {
    this.setState({
      result: a + b
    })
  }

  subtract(a, b) {
    this.setState({
      result: a - b
    })  }

  multiply(a, b) {
    this.setState({
      result: a * b
    })  }

  divide(a, b) {
    this.setState({
      result: a / b
    })  }

  handleChange(e) {
    if(e.target.id === '1') {
      this.setState({
        number1: parseInt(e.target.value),
      })
    } else if (e.target.id === '2') {
      this.setState({
        number2: parseInt(e.target.value),
      })
    }
  }

  render() {
    return(

      <div className="container">
        <h1>Add with React!</h1>

        <div className='add'>
          <div className='numbers'>
            <button onClick={ (e) => this.updateCurrentNumber(0) }>ZERO</button>
            <button onClick={ (e) => this.updateCurrentNumber(1) }>ONE</button>
            <button onClick={ (e) => this.updateCurrentNumber(2) }>TWO</button>
            <button onClick={ (e) => this.updateCurrentNumber(3) }>THREE</button>
            <button onClick={ (e) => this.updateCurrentNumber(4) }>FOUR</button>
            <button onClick={ (e) => this.updateCurrentNumber(5) }>FIVE</button>
            <button onClick={ (e) => this.updateCurrentNumber(6) }>SIX</button>
            <button onClick={ (e) => this.updateCurrentNumber(7) }>SEVEN</button>
            <button onClick={ (e) => this.updateCurrentNumber(8) }>EIGHT</button>
            <button onClick={ (e) => this.updateCurrentNumber(9) }>NINE</button>
          </div>
          <div className='operators'>
          <button onClick={  }>add</button>
          <button onClick={ (e) => this.subtract(this.state.number1, this.state.number2) }>subtract</button>
          <button onClick={ (e) => this.multiply(this.state.number1, this.state.number2) }>multiply</button>
          <button onClick={ (e) => this.divide(this.state.number1, this.state.number2) }>divide</button>
          <button onClick={ (e) => this.divide(this.state.number1, this.state.number2) }>EQUALS</button>
          <p>current number</p>
          <p>{this.state.currentNumber}</p>
          </div>

          <hr />

          <div className='old-shit'>
            <input id='1' type="text" value={this.state.number1} onChange={this.handleChange} />
            <span>||||</span>
            <input id='2' type="text" value={this.state.number2} onChange={this.handleChange} />
            <span>=</span>
            <button onClick={ (e) => this.sum(this.state.number1, this.state.number2) }>add numbers</button>
            <button onClick={ (e) => this.subtract(this.state.number1, this.state.number2) }>subtract numbers</button>
            <button onClick={ (e) => this.multiply(this.state.number1, this.state.number2) }>multiply numbers</button>
            <button onClick={ (e) => this.divide(this.state.number1, this.state.number2) }>divide numbers</button>
          </div>
          <h3>Addition results go here!</h3>
          <p>{this.state.result}</p>
        </div>
      </div>

    )
  }
}

export default Calculator;
