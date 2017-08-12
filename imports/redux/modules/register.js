const NEW_USER = 'NEW_USER';

const initialState = {
    name: '',
    email: '',
    password: '',
    bio: ''
};

export function addUser(name, email, password, bio) {
  return {
    type: NEW_USER,
    payload: { 
      name,
      email,
      password,
      bio
     }
  }
}

function NewUserReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        bio: action.payload.bio
      };
      default:
        return state;
  }
}