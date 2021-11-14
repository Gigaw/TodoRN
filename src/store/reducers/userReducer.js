const SET_USER = 'SET_USER';

const initialState = {
  user: null,
  isFetching: true,
  token: null,
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        token: action.payload.session_token,
        isFetching: false,
        user: action.payload.session.identity.traits
      };
    default:
      return state;
  }
};

export const setUser = (data) => ({type: SET_USER, payload: data})