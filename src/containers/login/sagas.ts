import Axios from 'axios';
import * as Eff from 'redux-saga/effects' 

import { LOGIN_START_SAGAS, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START_SAGAS, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_START } from './constants';
import { apiRoute } from '../../utils';
const takeEvery: any = Eff.takeEvery;
const put: any = Eff.put;

type LoginType = {
    type: string,
    username: string,
    password: string,
    name?: string,
    lastname?: string,
    id: string,
    history:any,
}


function* loginWorker(loginData: LoginType) {
    yield put({ type: LOGIN_START, state: true });
    const { username, password } = loginData;
    const { data: { success, response} } = yield Axios.post(apiRoute('agente/login'), {
        username, password
    });
    if (success) {
        yield put({ type: LOGIN_SUCCESS, user : response.data, message: response.message });
        yield localStorage.setItem('token', '1');
        yield localStorage.setItem('user', JSON.stringify(response.data));
        setTimeout(() => {
            loginData.history.push('/dashboard');
        }, 1000);
    } else {
        yield put({ type: LOGIN_FAIL, response});
    }
    yield put({ type: LOGIN_START, state: false });
}

function* registerWorker(registerData:LoginType) {
    yield put({ type: LOGIN_START, state: true });
    const { password, lastname = '', name = '', username } = registerData;
    const {data: { success, response}} = yield Axios.post(apiRoute('agente/register'), {
        username, password, lastname, firstname: name
    });
    if (success) {
        yield put({ type: REGISTER_SUCCESS, user : response.data,  message: response.message });
        // yield localStorage.setItem('token', '1');
        // yield localStorage.setItem('user', JSON.stringify(response.data));
        setTimeout(() => {
            registerData.history.push('/dashboard');
        }, 1000);
    } else {
        yield put({ type: REGISTER_FAIL, response})
    }
    yield put({ type: LOGIN_START, state: false });
}

export function* loginWatcher() {
    yield takeEvery(LOGIN_START_SAGAS, loginWorker)
}

export function* registerWatcher() {
    yield takeEvery(REGISTER_START_SAGAS, registerWorker)
}