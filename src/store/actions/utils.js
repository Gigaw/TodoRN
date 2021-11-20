import axios from 'axios';
const KRATOS_URL = 'http://127.0.0.1:4433/';

//login
export const initializeLoginFlow = async () => {
  try {
    const response = await axios({
      url: '/self-service/login/api?refresh=false',
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
  const loginFlow = await initializeLoginFlow();

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

//Функция находит все ошибки в массиве полей
export const getErrorsFromFields = fields => {
  let errors = [];
  fields.forEach(field => {
    if (field.messages) {
      field.messages.forEach(el => {
        if (el.type === 'error') {
          errors.push(el.text);
        }
      });
    }
  });
  return errors;
};

export const getErrorsFromMessages = messages => {
  if (messages) {
    return messages.map(el => {
      if (el.type === 'error') {
        return el.text;
      }
    });
  } else {
    return [];
  }
};
