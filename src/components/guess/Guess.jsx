import './Guess.css'
import { useState } from 'react'

function Guess( {answer}) {

    const [inputClass, setInputClass] = useState("input-box");

    const checkAnswer = (e) => {
        e.preventDefault()
        if (e.target.guess.value === answer.toLowerCase()) {
            setInputClass("input-box correct")
        } else {
            setInputClass("input-box incorrect")
        }
        
    }

    return (
        <form onSubmit={checkAnswer}>
            <label htmlFor='guess'>Guess the answer here:</label>
            <input className={inputClass} type="text" id="guess" name="guess" placeholder={"Type your guess"}></input>
            <button type="submit">Check Answer</button>
            <p>Current streak: </p>
            <p>Longest strak: </p>
        </form>
    )
}

export default Guess