import './Flashcard.css'
import { useState } from 'react'

function Flashcard({ question, answer }) {
    
    const [cardContent, setCardContent] = useState(question);

    function flip() {
        if (cardContent == answer) {
            setCardContent(question)
        } else {
            setCardContent(answer)
        }
    }

    return (
        <div onClick={flip} className='flashcard-container'>{cardContent}</div>
    )
}

export default Flashcard