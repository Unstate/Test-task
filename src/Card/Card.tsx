import { CardProps } from "./Card.props"
import classes from './../styles/Card.module.scss'

const Card: React.FC<CardProps> = ({ card,likeCard,deleteCard }) => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardName}>{card.title}</div>
            <div>
                <div className={classes.infoContainer}>
                    <div className={classes.likeContainer}>
                        <div onClick={() => likeCard(card.id) }>
                            {card.completed ? <img className={classes.liked} src='/pictures/like.svg'></img> : <img src='/pictures/like.svg'></img>}
                        </div>
                    </div>
                    <button onClick={() => deleteCard(card.id)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card