import $ from 'jquery';

export function loadProducts() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/products')
    .then(data => dispatch({
      type: 'load-products',
      data: data
    }));
  };
  return asyncAction;
}
