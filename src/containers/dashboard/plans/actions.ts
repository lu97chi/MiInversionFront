import { PLANS_START_SAGAS, PLAN_DELETE_SAGAS, OPEN_NOTIFICATION, CLOSE_NOTIFICATION, PLAN_ADD_SAGAS, PLAN_EDIT_SAGAS } from "./contants";

export function getPlans(agentId:string) {
    return {
        type: PLANS_START_SAGAS,
        agentId
    }
}

export function deletePlan(id: string) {
    return {
        type: PLAN_DELETE_SAGAS,
        id
    }
}

export function addPlan(plan: any, agenteid: string) {
    return {
        type: PLAN_ADD_SAGAS,
        plan,
        agenteid,
    }
}

export function editPlan(plan:any, id: string) {
    return {
        type: PLAN_EDIT_SAGAS,
        plan,
        id
    }
}

export function openNotification() {
    return {
        type: OPEN_NOTIFICATION
    }
}

export function closeNotification() {
    return {
        type: CLOSE_NOTIFICATION
    }
}