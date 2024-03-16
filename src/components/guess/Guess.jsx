import './Guess.css'
import { useState } from 'react'

function Guess( {answer}) {

    const [inputClass, setInputClass] = useState("input-box");

    const [longStreak, setLongStreak] = useState(0)
    const [curStreak, setCurStreak] = useState(0)

    const checkAnswer = (e) => {
        e.preventDefault()
        if (e.target.guess.value === answer.toLowerCase()) {
            setInputClass("input-box correct")
            setCurStreak(curStreak + 1)
            if (curStreak + 1 > longStreak) {
                setLongStreak(curStreak + 1)
            }
        } else {
            setInputClass("input-box incorrect")
            setCurStreak(0)
        }
        
    }

    return (
        <form onSubmit={checkAnswer}>
            <label htmlFor='guess'>Guess the answer here:</label>
            <input className={inputClass} type="text" id="guess" name="guess" placeholder={"Type your guess"}></input>
            <button type="submit">Check Answer</button>
            <p>Current streak: {curStreak} </p>
            <p>Longest streak: {longStreak} </p>
        </form>
    )
}

export default Guess