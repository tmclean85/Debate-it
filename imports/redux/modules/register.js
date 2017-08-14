import { setValue } from 'neoform-plain-object-helpers';


const NEW_USER = 'NEW_USER';

const initialState = {
  form: {
    name: '',
    email: '',
    password: '',
    bio: ''
  }    
};

export function addUser(name, value) {
  return {
    type: NEW_USER,
    payload: { 
      name,
      value
     }
  }
}

export function NewUserReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      const form = setValue(state, action.payload.name, action.payload.value)    
      return {
        ...state,
        ...form
      };
      default:
        return state;
  }
}