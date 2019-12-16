import Axios from 'axios';
import * as Eff from 'redux-saga/effects';
import { apiRoute } from '../../../utils';
import { PLANS_START_SAGAS, PLANS_SET_PLANS, PLAN_DELETE_SAGAS, PLAN_DELETE_SUCCESS, OPEN_NOTIFICATION, PLAN_ADD_SAGAS, PLAN_ADD_SUCCESS, PLAN_EDIT_SAGAS, PLAN_EDIT_SUCCESS } from './contants';
const takeEvery: any = Eff.takeEvery;
const put: any = Eff.put;


function* plansWorker({agentId}: {agentId: string}) {
    console.log(agentId);
    const data = yield Axios.get(apiRoute(`planes/usuario/${agentId}`));
    yield put({type:PLANS_SET_PLANS, response: data.data});
}

function* plansDeleteWorker({id}: {id: string}) {
    try {
        yield Axios.delete(apiRoute(`planes/${id}`));
        yield put({ type: PLAN_DELETE_SUCCESS, planId: id});
        yield put({ type: OPEN_NOTIFICATION, response: {state: 'Plan eliminado', variant: 'success'}});
    } catch (error) {
        yield put({ type: OPEN_NOTIFICATION, response: {state: 'Ocurrio un error', variant: 'error'}});
    }
}

function* plansAddWorker({plan, agenteid} : any) {
    try {
        const { name, mininvest, maxinvest, monthlyrate, duration } = plan;
        const { data } = yield Axios.post(apiRoute('planes'), { name, mininvest, maxinvest, monthlyrate, duration, agenteid });
        yield put({ type: PLAN_ADD_SUCCESS, response: data});
        yield put({ type: OPEN_NOTIFICATION, response: { state: 'Plan agregado', variant: 'success'}});
    } catch (error) {
        yield put({ type: OPEN_NOTIFICATION, response: {state: 'Ocurrio un error', variant: 'error'}});
    }
}

function* plansEditWorker({plan, id}: any) {
    try {
        const notNulls = Object.keys(plan).filter((item) => plan[item] !== null)
        const body:any = {};
        notNulls.forEach(key => {
            body[key] = plan[key]
        });
        console.log(body);
        const { data } = yield Axios.put(apiRoute(`planes/${id}`),  body );
        yield put({ type: PLAN_EDIT_SUCCESS, response: data});
        yield put({ type: OPEN_NOTIFICATION, response: { state: 'Plan editado', variant: 'success'}});
    } catch (error) {
        yield put({ type: OPEN_NOTIFICATION, response: {state: 'Ocurrio un error', variant: 'error'}});

    }
}

export function* plansWatcher() {
    yield takeEvery(PLANS_START_SAGAS, plansWorker);
}

export function* plansDeleteWatcher() {
    yield takeEvery(PLAN_DELETE_SAGAS, plansDeleteWorker);
}

export function* plansAddWatcher() {
    yield takeEvery(PLAN_ADD_SAGAS, plansAddWorker);
}

export function* plansEditWatcher() {
    yield takeEvery(PLAN_EDIT_SAGAS, plansEditWorker);
}