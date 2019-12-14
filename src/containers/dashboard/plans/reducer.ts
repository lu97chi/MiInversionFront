import produce from 'immer';
import { PLANS_SET_PLANS } from './contants';
const initState = {
    loading: false,
    plans: [],
}


const PlanesReducer = (state = initState, action:any) =>
    produce(state, draft => {
        switch (action.type) {
            case PLANS_SET_PLANS:
                draft.plans = action.response;
                break;
        
            default:
                break;
        }
    })

export default PlanesReducer;