import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSignInData = async (email, password) => {
  try {
    AsyncStorage.setItem('user_password', password);
    AsyncStorage.setItem('user_email', email);
  } catch (e) {
    console.log(e);
  }
};
export const getSignInData = async () => {
  try {
    const email = await AsyncStorage.getItem('user_email');
    const password = await AsyncStorage.getItem('user_password');

    // console.log(email, password);

    if (email && password) {
      return {email, password};
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getShouldAutoAuthorize = async () => {
  try {
    const value = await AsyncStorage.getItem('should_authorize');
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setShouldAutoAuthorize = async value => {
  try {
    AsyncStorage.setItem('should_authorize', JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
// export const putSignInData = async (email, password) => {
//   try {
//     await AsyncStorage.setItem('user_password', password);
//     await AsyncStorage.setItem('user_email', email);
//   } catch (e) {
//     console.log(e);
//   }
// };
