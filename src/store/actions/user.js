import {clearUser, setError, setUser} from '../reducers/userReducer';
import {
  getErrorsFromFields,
  getErrorsFromMessages,
} from './utils';
import {completeLoginFlow, completeRegisterFlow} from './ory-cratos-requests';

export const getUser = (login, password) => {
  return async dispatch => {
    const user = await completeLoginFlow(login, password);
    if (user.status === 200) {
      dispatch(setUser(user.data));
    } else {
      const messages = user?.data.methods.password.config.messages;
      const errors = getErrorsFromMessages(messages);
      if (errors.length) {
        dispatch(setError({hasError: true, errorMessage: errors.join('\n')}));
      } else {
        dispatch(
          setError({hasError: true, errorMessage: 'something went wrong'}),
        );
      }
    }
  };
};

export const registerUser = data => {
  return async dispatch => {
    const user = await completeRegisterFlow(data);
    if (user.status === 200) {
      dispatch(setUser(user.data));
    } else {
      const messages = user?.data.methods.password.config.fields;
      const errors = getErrorsFromFields(messages);
      if (errors.length) {
        dispatch(setError({hasError: true, errorMessage: errors.join('\n')}));
      } else {
        dispatch(
          setError({hasError: true, errorMessage: 'something went wrong'}),
        );
      }
    }
  };
};

export const clearUserError = () => dispatch => {
  dispatch(setError({hasError: false, errorMessage: ''}));
};

export const clearUserData = () => dispatch => {
  dispatch(clearUser());
};
