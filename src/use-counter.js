import { useSelector } from "react-redux"
import { useAction } from "./use-actions";
import { increment, decrement, set} from './action';

export const useCounter = () =>{
    const count = useSelector(state => state.count);
    const actions = useAction({ increment, decrement, set});

    return {count, ...actions};
}