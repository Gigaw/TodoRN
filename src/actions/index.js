import axios from 'axios';

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
    return null;
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

export const getResponse = () => {
  completeRecoveryFlow('gigolaevigor@mail.ru', '071001099');
};
