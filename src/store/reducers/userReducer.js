const SET_USER = 'SET_USER';
const SET_ERROR = 'SET_ERROR';
const CLEAR_USER = 'CLEAR_USER';

const initialState = {
  user: null,
  avatar: '',
  isFetching: true,
  token: null,
  hasError: false,
  errorMessage: '',
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        token: action.payload.token,
        isFetching: false,
        user: action.payload.user,
      };
    case SET_ERROR:
      return {
        ...state,
        hasError: action.payload.hasError,
        errorMessage: action.payload.errorMessage,
      };
    case CLEAR_USER:
      return {
        ...state,
        token: null,
        user: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const setUser = data => ({type: SET_USER, payload: data});
export const setError = data => ({type: SET_ERROR, payload: data});
export const clearUser = () => ({type: CLEAR_USER});
