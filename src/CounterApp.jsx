import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {

   const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleAddDecrement = () => {
        setCounter(counter - 1)
    }

    const handleAddReset = () => {
       setCounter(value)
    }
    

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1 </button>
        <button onClick={handleAddDecrement}>-1 </button>
        <button onClick={handleAddReset}> Reset </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}