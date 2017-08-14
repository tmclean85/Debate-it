import { setValue } from 'neoform-plain-object-helpers';


const RETURNING_USER = "RETURNING_USER";

const initialState = {
  form: {
    email: '',
    password: ''
  }  
};

export function logInUser(name, value) {
  return {
    type: RETURNING_USER,
    payload: {
      name,
      value
    }
  }
}

export function LogInReducer(state = initialState, action) {
  switch (action.type) {
    case RETURNING_USER:
      const form = setValue(state, action.payload.name, action.payload.value)
      return {
        ...state,
        ...form
      };
      default:
        return state;
  }
}