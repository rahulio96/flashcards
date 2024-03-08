import Flashcard from '../flashcard/Flashcard'
import './Home.css'

function Home() {
    return (
        <div className='home-container'>
            <h1>Learn Spanish Vocabulary!</h1>
            <h4>Want to test your knowledge of Spanish vocabulary? You've come to the right place!</h4>
            <h4>Number of Cards: 20</h4>
            <Flashcard />
            <button className='change-card'>←</button>
            <button className='change-card'>→</button>
        </div>
    )
}

export default Home