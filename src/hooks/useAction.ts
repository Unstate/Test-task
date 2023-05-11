import { bindActionCreators } from "redux"
import {useDispatch} from "react-redux"
import * as CardActionCreators from '../Redux/action-creators/cards'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CardActionCreators, dispatch)
}