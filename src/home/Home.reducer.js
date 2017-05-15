const INITIAL_STATE = {
  products: []
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-products') {
    return Object.assign({}, state, {
      products: action.data
    });
  }
    return state;
}
  // add if statements to catch specific actions
  // to return different new state from previous state
