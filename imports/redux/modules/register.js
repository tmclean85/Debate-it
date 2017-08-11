const NEW_USER = 'NEW_USER';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    bio: '',
  }
};

export function addUser(name, email, password, bio) {
  return {
    type: NEW_USER,
    payload: user
  }
}

function newUserReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        user: action.payload
      };
  }
}