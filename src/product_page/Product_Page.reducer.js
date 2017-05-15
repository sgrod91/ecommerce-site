const INITIAL_STATE = {
  product: null
};

export default function reducer(state = INITIAL_STATE, action) {
if (action.type === 'load-single-product') {
  return Object.assign({}, state, {
    product: action.data
    });
  } else if(action.type === 'add-to-cart') {
    return Object.assign({}, state, {

    })
  }
  return state;
}
