export interface CardState {
    cards: any[];
    loading: boolean;
    error: null | string; 
}

export enum CardActionTypes {
    FETCH_CARDS = 'FETCH_CARDS',
    FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
    FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
    DELETE_CARD = 'DELETE_CARD',
    LIKE_CARD = 'LIKE_CARD',
}

interface FetchCardsAction {
    type: CardActionTypes.FETCH_CARDS;
}

interface FetchCardsSuccessAction {
    type: CardActionTypes.FETCH_CARDS_SUCCESS;
    payload: any[];
}

interface FetchCardsErrorAction {
    type: CardActionTypes.FETCH_CARDS_ERROR;
    payload: string
}

interface DeleteCardAction {
    type: CardActionTypes.DELETE_CARD;
    payload: number
}

interface LikeCardAction {
    type: CardActionTypes.LIKE_CARD;
    payload: number
}

export type CardAction = FetchCardsAction | FetchCardsErrorAction | FetchCardsSuccessAction | DeleteCardAction | LikeCardAction;
