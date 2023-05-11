import { useState, useMemo, useEffect } from "react"
import Filter from "./Filter"
import { useTypedSelector } from "./hooks/useTypedUseSelector"
import { useActions } from "./hooks/useAction"
import Card from "./Card/Card"
import classes from './styles/Cards.module.scss'

const Cards: React.FC = () => {

    const {cards,error,loading} = useTypedSelector(state => state.card)
    const {fetchCards,likeCard,deleteCard} = useActions()

    useEffect(()=>{
        fetchCards()
    },[])

    const filteredCards = cards
    ? cards.filter((card) => card.completed)
    : cards;
    
    const [showLiked, setShowLiked] = useState(false)

    if (loading) {
        return <img className={classes.preloader} src='/pictures/preloader.png'></img>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <Filter setShowLiked={setShowLiked} showLiked={showLiked}></Filter> 
            {showLiked
            ? filteredCards.map(card =><Card card={card} key={card.id} likeCard={likeCard} deleteCard={deleteCard}></Card>)
            : cards.map(card => <Card key={card.id} card={card} likeCard={likeCard} deleteCard={deleteCard}></Card>)
            }
        </div>
    )
}

export default Cards