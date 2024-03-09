import Flashcard from '../flashcard/Flashcard'
import './Home.css'
import { useState } from 'react';

function Home() {

    const [questionAnswerList, setQuestionAnswerList] = useState(
        [{q:'Pan', a:'Bread'},
        {q:'Leche', a:'Milk'},
        {q:'Queso', a:'Cheese'},
        {q:'Fruta', a:'Fruit'},
        {q:'Verdura', a:'Vegetable'},
        {q:'Carne', a:'Meat'},
        {q:'Pollo', a:'Chicken'},
        {q:'Pescado', a:'Fish'},
        {q:'Arroz', a:'Rice'},
        {q:'Frijoles', a:'Beans'},
        {q:'Huevos', a:'Eggs'},
        {q:'Aceite', a:'Oil'},
        {q:'Sal', a:'Salt'},
        {q:'Azúcar', a:'Sugar'},
        {q:'Harina', a:'Flour'},
        {q:'Sopa', a:'Soup'},
        {q:'Ensalada', a:'Salad'},
        {q:'Postre', a:'Dessert'},
        {q:'Helado', a:'Ice cream'},
        {q:'Agua', a:'Water'}])

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
            <Flashcard question={questionAnswerList[index].q} answer={questionAnswerList[index].a}/>
            <button onClick={prevCard} className='change-card'>←</button>
            <button onClick={nextCard}className='change-card'>→</button>
            <button onClick={shuffle} className='change-card'>⟳</button>
        </div>
    )
}

export default Home