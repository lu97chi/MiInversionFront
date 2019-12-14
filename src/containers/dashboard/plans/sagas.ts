import Axios from 'axios';
import * as Eff from 'redux-saga/effects';
import { apiRoute } from '../../../utils';
import { PLANS_START_SAGAS, PLANS_SET_PLANS } from './contants';
const takeEvery: any = Eff.takeEvery;
const put: any = Eff.put;


function* plansWorker(agentId: string) {
    const data = yield Axios.get(apiRoute('planes/usuario/4'));
    yield put({type:PLANS_SET_PLANS, response: data.data});
    console.log(data, agentId);
}

export function* plansWatcher() {
    yield takeEvery(PLANS_START_SAGAS, plansWorker);
}