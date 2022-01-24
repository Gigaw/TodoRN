import {clearUser, setError, setUser} from '../reducers/userReducer';
import {checkUserData} from './utils';
import {setSignInData} from '../../utils/asyncStorage';

export const getUser = (login, password) => {
  return dispatch => {
    const data = checkUserData(login, password);
    if (data) {
      setSignInData(login, password);
      return dispatch(setUser(data));
    }
    return dispatch(
      setError({
        hasError: true,
        errorMessage: 'Неверные данные, попробуйте снова',
      }),
      setSignInData('', ''),
    );
  };
};

export const registerUser = data => {
  return dispatch => {
    try {
      setSignInData(data.email || '', data.password || '');
    } catch (e) {
      console.log('async storate error while register user ', e);
    }
    dispatch(setUser({
      token: data.password,
      user: {
        name: data.name,
        avatar: '../../assets/images/person.jpg',
      }
    }));
  };
};

export const clearUserError = () => dispatch => {
  dispatch(setError({hasError: false, errorMessage: ''}));
};

export const clearUserData = () => dispatch => {
  dispatch(clearUser());
};

// export const registerUser = data => {
//   return async dispatch => {
//     const user = await completeRegisterFlow(data);
//     console.log('user', user.data);
//     if (user?.status === 200) {
//       dispatch(setUser(user.data));
//     } else {
//       const fields = user?.data.methods.password.config.fields;
//       const messages = user?.data.methods.password.config.messages;
//       const configErrors = getErrorsFromMessages(messages);
//       const fieldsErrors = getErrorsFromFields(fields);
//       const errors = [...configErrors, ...fieldsErrors];
//       console.log('errors', errors);
//       if (errors.length) {
//         dispatch(setError({hasError: true, errorMessage: errors.join('\n')}));
//       } else {
//         dispatch(
//           setError({hasError: true, errorMessage: 'something went wrong'}),
//         );
//       }
//     }
//   };
// };

// export const getUser = (login, password) => {
//   return async dispatch => {
//     const user = await completeLoginFlow(login, password);
//     if (user?.status === 200) {
//       dispatch(setUser(user.data));
//     } else {
//       const messages = user?.data.methods.password.config.messages;
//       const errors = getErrorsFromMessages(messages);
//       if (errors.length) {
//         dispatch(setError({hasError: true, errorMessage: errors.join('\n')}));
//       } else {
//         dispatch(
//           setError({hasError: true, errorMessage: 'something went wrong'}),
//         );
//       }
//     }
//   };
// };
