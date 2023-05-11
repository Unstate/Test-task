export interface Item {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface CardProps {
    card : Item;
    likeCard: Function;
    deleteCard: Function;
}

