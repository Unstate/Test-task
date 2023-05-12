export interface Item {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    completed?: boolean;
}

export interface CardProps {
    card : Item;
    likeCard: Function;
    deleteCard: Function;
}

