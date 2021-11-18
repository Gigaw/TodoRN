import axios from 'axios';
import {setUser} from '../reducers/userReducer';

const KRATOS_URL = 'http://127.0.0.1:4433/';

const initializeLoginFlow = async () => {
  try {
    const response = await axios({
      url: '/self-service/login/api?refresh=false',
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

const completeRecoveryFlow = async (login, password) => {
  const loginFlow = await initializeLoginFlow();

  if (loginFlow) {
    const config = loginFlow.methods.password.config;

    //получаю значение токена
    const csrfToken = config.fields.find(el => el.name === 'csrf_token').value;

    try {
      const response = await axios({
        url: config.action,
        method: config.method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          identifier: login,
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

export const getUser = (login, password) => {
  return async dispatch => {
    // completeRecoveryFlow('gigolaevigor@mail.ru', '071001099');
    const user = await completeRecoveryFlow(login, password);
    dispatch(setUser(user));
  };
};

const initializeRegistrationFlow = async () => {
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

const completeRegistrationFlow = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  const registrationFlow = await initializeRegistrationFlow();
  
  if (registrationFlow) {
    const config = registrationFlow.methods.password.config;

    //получаю значение токена
    const csrfToken = config.fields.find(el => el.name === 'csrf_token').value;

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

export const registerUser = (data) => {
  return async dispatch => {
    const registration = await completeRegistrationFlow(data)
    dispatch(setUser(registration))
  }
}