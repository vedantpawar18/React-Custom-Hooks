import React from 'react'
import UseTimeout from '../Hooks/UseTimeout'

const TestComponent = () => {

    const ready= UseTimeout(3000);
  return (
    <div>
        <h1>TestComponent</h1>
        <h4>{ready? "TestComponent is Ready": "TestComponent is Not Ready" }</h4>
    </div>
  )
}

export default TestComponent