import React, { Component } from 'react'

class Calculator extends Component {
    state= {
        total:0,
        num1:0,
        num2:0
    }
    setNum=(e, num)=>{
        console.log(e.target.value)
        this.setState({
            [num]:e.target.value
        })
    }
    getTotal=()=>{
        const grandTotal = parseInt(this.state.num1) + parseInt(this.state.num2)
        console.log(grandTotal)
    
    
    this.setState({
        total:grandTotal
})
    }
    
    render() {
        return (
    <div className='container'>
        <h1>Add With React!</h1>
        <div className='add'>
        <input type='number'
            name='num1'
            placeholder='Enter your first number'
            value={this.state.num1}
            onChange={(e)=>this.setNum(e,'num1')}/>

            <span>+</span>
            <input type='number'
                name='num2'
                placeholder='Enter your second number'
                value={this.state.num2}
                onChange={(e)=>this.setNum(e,'num2')}/>
            <button onClick={this.getTotal}>=</button>
            <h3>Addition results go here!</h3>
            <p>{this.state.total}</p>
            <div>
                Class Component
            </div>
        
        </div>
    </div>
        )
    }

}


export default Calculator 
