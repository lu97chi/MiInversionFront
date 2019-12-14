import { PLANS_START_SAGAS } from "./contants";

export function getPlans(agentId:string) {
    return {
        type: PLANS_START_SAGAS,
        agentId
    }
}