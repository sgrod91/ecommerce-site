const INITIAL_STATE = {
  username: '',
  email: '',
  first: '',
  last: '',
  password: '',
  confirm: '',
  errorMessage: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-state') {
    return Object.assign({}, state, {
      [action.propName]: action.value
    });
  } else if (action.type === 'error') {
    return Object.assign({}, state, {
      errorMessage: action.error
    })
  }
  return state;
}
