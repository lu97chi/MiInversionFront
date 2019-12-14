import { all, fork } from "redux-saga/effects";
import { loginWatcher, registerWatcher } from "./containers/login/sagas";


export default function* () {
    yield all([
        fork(loginWatcher),
        fork(registerWatcher),
    ])
}