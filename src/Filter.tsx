import classes from './styles/Filter.module.scss'

interface FilterProps {
    setShowLiked: Function;
    showLiked: boolean;
}

const Filter: React.FC<FilterProps> = ({setShowLiked,showLiked}) => {

    return (
        <div>
            <button className={classes.showLikedButton} onClick={() => setShowLiked(!showLiked)}>Liked cards</button>
        </div>
    )
}

export default Filter