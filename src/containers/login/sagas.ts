import Axios from 'axios';
import * as Eff from 'redux-saga/effects' 
import { LOGIN_START_SAGAS, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START_SAGAS } from './constants';
import { apiRoute } from '../../utils';
const takeEvery: any = Eff.takeEvery;
const put: any = Eff.put;

type LoginType = {
    type: string,
    username: string,
    password: string,
}


function* loginWorker(loginData: LoginType) {
    const { username, password } = loginData;
    const { data: { success, response} } = yield Axios.post(apiRoute('agente/login'), {
        username, password
    });
    if (success) {
        yield put({ type: LOGIN_SUCCESS, user : response.data })
    } else {
        yield put({ type: LOGIN_FAIL, response})
    }
}

function* registerWorker() {
    yield console.log('register')
}

export function* loginWatcher() {
    yield takeEvery(LOGIN_START_SAGAS, loginWorker)
}

export function* registerWatcher() {
    yield takeEvery(REGISTER_START_SAGAS, registerWorker)
}