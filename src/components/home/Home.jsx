import Flashcard from '../flashcard/Flashcard'
import './Home.css'
import Guess from '../guess/Guess'
import { useState } from 'react';

function Home() {

    return (
        <div className='home-container'>
            <div>
                <h1>Learn Spanish Vocabulary!</h1>
                <h4>Want to test your knowledge of food themed Spanish vocabulary? You've come to the right place!</h4>
                <h4>Number of Cards: 20</h4>
                <Flashcard />
            </div>
        </div>
    )
}

export default Home