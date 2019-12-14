/* eslint-disable default-case */
import produce from 'immer';
import { LOGIN_SUCCESS, LOGIN_FAIL, CLOSE_NOTIFICATION, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_START, REGISTER_START } from './constants';

const initState = {
    loading: false,
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
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        draft.user = action.user;
        draft.feedBack.open = true;
        draft.feedBack.success = 'success';
        draft.feedBack.message = action.message
        break;
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        draft.feedBack.open = true;
        draft.feedBack.success = 'error';
        draft.feedBack.message = action.response;
        break;
      case LOGIN_START:
      case REGISTER_START:
        draft.loading = action.state;
        break;
    }
  });


export default LoginReducer;