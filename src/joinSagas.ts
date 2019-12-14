import { all, fork } from "redux-saga/effects";
import { loginWatcher, registerWatcher } from "./containers/login/sagas";
import { plansWatcher } from './containers/dashboard/plans/sagas';

export default function* () {
    yield all([
        fork(loginWatcher),
        fork(registerWatcher),
        fork(plansWatcher)
    ])
}