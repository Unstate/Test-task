import { CardAction, CardActionTypes, CardState } from "../../types/cardType"

const initialState:CardState = {
    cards: [],
    loading: false,
    error:null,
}

export const cardReduser = (state = initialState,action:CardAction):CardState => {
    switch (action.type) {
        case CardActionTypes.FETCH_CARDS:
            return {loading: true, error: null, cards:[]}
        case CardActionTypes.FETCH_CARDS_SUCCESS:
            return {loading: false, error: null, cards:action.payload}
        case CardActionTypes.FETCH_CARDS_ERROR:
            return {loading: false, error: action.payload, cards:[]}
        case CardActionTypes.DELETE_CARD:
            // const index = initialState.cards.findIndex(card => card.id === action.payload)
            // if (index !== -1) {
            //     state.cards.splice(index,1)
            // }
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            }
        case CardActionTypes.LIKE_CARD:
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.payload ? {...card, completed: !card.completed} : card)
            }   
        default: 
            return state
    }
}