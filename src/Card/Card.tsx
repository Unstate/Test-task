import { CardProps } from "./Card.props"
import classes from './../styles/Card.module.scss'

const Card: React.FC<CardProps> = ({ card, likeCard, deleteCard }) => {

    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardName}>{card.title}</div>
            <div>
                <div className={classes.infoContainer}>
                    <div>
                        <img src={card.thumbnailUrl}></img>
                    </div>
                    <div className={classes.buttonContainer}>
                        <div className={classes.likeContainer}>
                            <div onClick={() => likeCard(card.id)}>
                                {card.albumId % 2 == 0 ? <img className={classes.liked} src='/pictures/like.svg'></img> : <img src='/pictures/like.svg'></img>}
                            </div>
                        </div>
                        <button onClick={() => deleteCard(card.id)}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card