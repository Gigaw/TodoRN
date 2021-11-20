import axios from 'axios';
import {setError, setUser} from '../reducers/userReducer';
import {
  completeLoginFlow,
  getErrorsFromFields,
  getErrorsFromMessages,
} from './utils';

const KRATOS_URL = 'http://127.0.0.1:4433/';

export const getUser = (login, password) => {
  return async dispatch => {
    const user = await completeLoginFlow(login, password);
    if (user.status === 200) {
      dispatch(setUser(user));
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

//register
export const registerUser = data => {
  //flow
  const initializeFlow = async () => {
    try {
      const response = await axios({
        url: '/self-service/registration/api',
        method: 'get',
        baseURL: KRATOS_URL,
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      if (e.response) {
        return e.response;
      }
    }
  };

  //complete flow
  const completeFlow = async ({email, password, firstName, lastName}) => {
    const registrationFlow = await initializeFlow();

    if (registrationFlow) {
      const config = registrationFlow.methods.password.config;

      //получаю значение токена
      const csrfToken = config.fields.find(
        el => el.name === 'csrf_token',
      ).value;

      try {
        const response = await axios({
          url: config.action,
          method: config.method,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            'traits.email': email,
            'traits.name.first': firstName,
            'traits.name.last': lastName,
            password: password,
            csrf_token: csrfToken,
          },
        });

        console.log(response.data);
        return response.data;
      } catch (e) {
        console.log(e);

        //Cообщение об ошибке при попытке входа
        return null;
      }
    } else {
      //Cообщение об ошибке при получении flow id
      return null;
    }
  };
  return async dispatch => {
    const registration = await completeFlow(data);
    dispatch(setUser(registration));
  };
};

export const clearUserError = () => dispatch => {
  dispatch(setError({hasError: false, errorMessage: ''}));
};
