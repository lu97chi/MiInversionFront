/* eslint-disable default-case */
import produce from 'immer';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, CLOSE_NOTIFICATION } from './constants';

const initState = {
    loading: false,
    response: '',
    feedBack: {
      open: false,
      success: '',
      message: ''
    },
    user: {
      username: '',
      firstname: '',
      lastname: ''
    }
}

const LoginReducer = (state = initState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case CLOSE_NOTIFICATION:
        draft.feedBack.open = false;
        break;
      case LOGIN_START:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.user = action.user;
        draft.feedBack.open = true;
        draft.feedBack.success = 'success';
        draft.feedBack.message = 'Acceso correcto'
        break;
      case LOGIN_FAIL:
        draft.feedBack.open = true;
        draft.feedBack.success = 'error';
        draft.feedBack.message = action.response;
        draft.response = action.response;
        break;
    }
  });


export default LoginReducer;