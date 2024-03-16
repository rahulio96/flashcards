import './Flashcard.css'
import { useState } from 'react'
import Guess from '../guess/Guess'

function Flashcard() {

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
    const [cardContent, setCardContent] = useState(questionAnswerList[0].q);

    function shuffle() { 
        const shuffled = [... questionAnswerList]
        for (let i = shuffled.length - 1; i > 0; i--) { 
            let j = Math.floor(Math.random() * (i + 1));          
            let temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }

        setQuestionAnswerList(shuffled)
        setIndex(0)
        setCardContent(shuffled[0].q)
    }

    function nextCard() {
        let next = index + 1
        if (next >= questionAnswerList.length) {
            setIndex(questionAnswerList.length-1)
        } else {
            setIndex(next)
            setCardContent(questionAnswerList[next].q)
        }
    }

    function prevCard() {
        let prev = index - 1
        if (prev < 0) {
            setIndex(0)
        } else {
            setIndex(prev)
            setCardContent(questionAnswerList[prev].q)
        }  
    }


    function flip() {
        if (cardContent == questionAnswerList[index].a) {
            setCardContent(questionAnswerList[index].q)
        } else {
            setCardContent(questionAnswerList[index].a)
        }
    }
 
    return (
        <>
            <div onClick={flip} className='flashcard-container'>{cardContent}</div>
            
            <button onClick={prevCard} className='change-card'>←</button>
            <button onClick={shuffle} className='change-card'>⟳</button>
            <button onClick={nextCard} className='change-card'>→</button>
            <div className='interacts'>
                <Guess answer = {questionAnswerList[index].a}/>
            </div>
        </>
    )
}

export default Flashcard