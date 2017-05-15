const INITIAL_STATE = {
  username: '',
  password: ''
};

export default function(state = INITIAL_STATE, action) {
  if (action.type === 'change-state') {
    return Object.assign({}, state, {
      [action]
    })
  }
}
