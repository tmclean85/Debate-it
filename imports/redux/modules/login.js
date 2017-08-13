const RETURNING_USER = "RETURNING_USER";

const initialState = {
  email: '',
  password: ''
};

export function logInUser(email, password) {
  return {
    type: RETURNING_USER,
    payload: {
      email,
      password
    }
  }
}

function LogInReducer(state = initialState, action) {
  switch (action.type) {
    case RETURNING_USER:
      return {
        ...state,
        email: action.paylod.email,
        password: action.payload.password
      };
      default:
        return state;
  }
}