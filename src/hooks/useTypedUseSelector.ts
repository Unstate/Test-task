import {useSelector} from 'react-redux'
import {TypedUseSelectorHook} from 'react-redux'
import { RootState } from '../Redux/reducers'
import { CardState } from '../types/cardType';

interface MyRootState extends RootState {
    card: CardState;
}
  
export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector;
  