import Flashcard from '../flashcard/Flashcard'
import './Home.css'
import { useState } from 'react';

function Home() {

    const [questionAnswerList, setQuestionAnswerList] = useState(
        [{'Pan': 'Bread'}, {'Leche': 'Milk'}, {'Queso': 'Cheese'}, 
        {'Fruta': 'Fruit'}, {'Verdura': 'Vegetable'}, {'Carne': 'Meat'}, {'Pollo': 'Chicken'}, 
        {'Pescado': 'Fish'}, {'Arroz': 'Rice'}, {'Frijoles': 'Beans'}, {'Huevos': 'Eggs'}, {'Aceite': 'Oil'}, 
        {'Sal': 'Salt'}, {'Azúcar': 'Sugar'}, {'Harina': 'Flour'}, {'Sopa': 'Soup'}, {'Ensalada': 'Salad'}, 
        {'Postre': 'Dessert'}, {'Helado': 'Ice cream'}, {'Agua': 'Water'}])

    const [index, setIndex] = useState(0);
    const maxLength = questionAnswerList.length

    function shuffle() { 
        const shuffled = [... questionAnswerList]
        for (let i = shuffled.length - 1; i > 0; i--) { 
            let j = Math.floor(Math.random() * (i + 1));          
            let temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }

        setQuestionAnswerList(shuffled)
      };

    function nextCard() {

    }

    function prevCard() {

    }

    return (
        <div className='home-container'>
            <h1>Learn Spanish Vocabulary!</h1>
            <h4>Want to test your knowledge of food themed Spanish vocabulary? You've come to the right place!</h4>
            <h4>Number of Cards: 20</h4>
            <Flashcard question={''} answer={''}/>
            <button onClick={prevCard} className='change-card'>←</button>
            <button onClick={nextCard}className='change-card'>→</button>
            <button onClick={shuffle} className='change-card'>⟳</button>
        </div>
    )
}

export default Home