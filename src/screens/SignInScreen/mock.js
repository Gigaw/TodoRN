export const mockUser = {
  password: '1234',
  email: '1234',
  user: {
    avatar: '../../assets/images/person.jpg',
    name: 'super name',
  },
};

export const checkUserData = (login, password) => {
  return login === mockUser.email && password === mockUser.password;
};
