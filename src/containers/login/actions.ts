import { LOGIN_START_SAGAS, CLOSE_NOTIFICATION, REGISTER_START_SAGAS } from "./constants";

type form = {
    username: string,
    password: string,
    name?: string,
    lastname?: string
}

export function makeLogin(form:form, history:any) {
  const { username, password } = form;
    return {
      type: LOGIN_START_SAGAS,
      username,
      password,
      history
    };
  }

export function makeRegister(form:form, history:any ) {
  const { username, password, name, lastname } = form;
    return {
      type: REGISTER_START_SAGAS,
      username,
      password,
      name,
      lastname,
      history
    };
  }
  

export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION
  }
}