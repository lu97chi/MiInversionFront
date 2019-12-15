import produce from 'immer';
import { PLANS_SET_PLANS, PLAN_DELETE_SUCCESS, OPEN_NOTIFICATION, CLOSE_NOTIFICATION, PLAN_ADD_SUCCESS, PLAN_EDIT_SUCCESS } from './contants';

type InitState = {
    loading: boolean,
    notification: { state: string, open: boolean, variant: string},
    plans: any
}

const initState:InitState = {
    loading: false,
    notification: {
        state: '',
        open: false,
        variant: ''
    },
    plans: [],
}


const PlanesReducer = (state = initState, action:any) =>
    produce(state, draft => {
        switch (action.type) {
            case PLANS_SET_PLANS:
                draft.plans = action.response;
                break;
            case PLAN_DELETE_SUCCESS:
                const result = draft.plans.filter((item:any) => item.id !== action.planId);
                draft.plans = result;
                break;
            case PLAN_ADD_SUCCESS:
                draft.plans = [...draft.plans, action.response];
                break;
            case PLAN_EDIT_SUCCESS:
                const planIndex = draft.plans.findIndex((plan:any) => plan.id === action.response.id);
                const editedFields = Object.keys(action.response);
                const editedPlan:any = {};
                editedFields.forEach((field) => {
                    editedPlan[field] = action.response[field];
                });
                draft.plans[planIndex] = editedPlan;
                break;
            case OPEN_NOTIFICATION:
                draft.notification.open = true;
                draft.notification.state = action.response.state
                draft.notification.variant = action.response.variant;
                break;
            case CLOSE_NOTIFICATION:
                draft.notification.open = false
                break;
            default:
                break;
        }
    })

export default PlanesReducer;