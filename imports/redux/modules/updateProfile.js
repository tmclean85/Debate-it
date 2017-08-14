import { setValue } from 'neoform-plain-object-helpers';

const UPDATE_USER = "UPDATE_USER";

const initialState = {
  form: {
    name: '',
    bio: ''
  }
};

export function updateUser(name, value) {
  return {
    type: UPDATE_USER,
    payload: {
      name,
      value
    }
  }
}

export function UpdateUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const form = setValue(state, action.payload.name, action.payload.value)
      return {
        ...state,
        ...form
      };
      default:
        return state;
  }
}