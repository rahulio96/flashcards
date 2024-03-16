import './Guess.css'

function Guess( {answer}) {

    const checkAnswer = (e) => {
        console.log(answer)
        e.preventDefault()
        if (e.target.guess.value === answer) {
            console.log("SUCCESS")
        } else {
            console.log("FAILURE")
            console.log(e.target.guess.value)
        }
        
    }

    return (
        <form onSubmit={checkAnswer}>
            <label htmlFor='guess'>Guess the answer here:</label>
            <input className="input-box" type="text" id="guess" name="guess" placeholder={"Type your guess"}></input>
            <button type="submit">Check Answer</button>
            <p>Current streak: </p>
            <p>Longest strak: </p>
        </form>
    )
}

export default Guess