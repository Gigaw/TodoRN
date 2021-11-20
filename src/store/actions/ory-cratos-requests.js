import axios from 'axios';
const KRATOS_URL = 'http://127.0.0.1:4433/';

const initializeFlow = async (type = 'login') => {
  let url;

  switch (type) {
    case 'login':
      url = '/self-service/login/api?refresh=false';
    case 'register':
      url = '/self-service/registration/api';
  }

  try {
    const response = await axios({
      url: url,
      method: 'get',
      baseURL: KRATOS_URL,
    });
    return response;
  } catch (e) {
    console.log('error flow', e.message);
    if (e.response) {
      return e.response;
    }
  }
};

export const completeLoginFlow = async (login, password) => {
  const loginFlow = await initializeFlow('login');

  if (loginFlow.status === 200 && loginFlow !== undefined) {
    const config = loginFlow.data.methods.password.config;

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

      // console.log(response);
      return response;
    } catch (e) {
      console.log('compete login flow error', e);
      return e.response;
    }
  } else {
    return loginFlow;
  }
};

export const completeRegisterFlow = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  const registerFlow = await initializeFlow(register);

  if (registerFlow.status === 200 && registerFlow !== undefined) {
    const config = registerFlow.data.methods.password.config;

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

      return response;
    } catch (e) {
      console.log('compete register flow error', e);
      return e.response;
    }
  } else {
    return registerFlow;
  }
};
