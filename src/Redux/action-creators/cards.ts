import { CardAction, CardActionTypes } from "../../types/cardType"
import { Dispatch } from "redux"
import axios from 'axios'

export const fetchCards = () => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            dispatch({type: CardActionTypes.FETCH_CARDS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
            setTimeout(()=>{
                dispatch({type: CardActionTypes.FETCH_CARDS_SUCCESS, payload: response.data})
            },500)
        } catch (e) {
            dispatch({
                type:CardActionTypes.FETCH_CARDS_ERROR,
                payload: 'Произошла ошибка при загрузке карточек'
            })
        }
    }
}

export const deleteCard = (id:number) => {
    return (dispatch: Dispatch<CardAction>) => {
        dispatch({type: CardActionTypes.DELETE_CARD, payload:id})
    }
}

export const likeCard = (id:number) => {
    return (dispatch: Dispatch<CardAction>) => {
        dispatch({type: CardActionTypes.LIKE_CARD, payload:id})
    }
}