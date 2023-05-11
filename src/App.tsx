import classes from './../src/styles/App.module.scss';
import Cards from './Cards';



const App = ( ) => {
  return (
    <div className={classes.blockContainer}>
      <Cards></Cards>
    </div>
  )
}

export default App