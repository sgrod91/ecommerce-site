import $ from 'jquery';

export function getSinglePage(productID) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/product/' + productID)
    .then(data => dispatch({
      type: 'load-single-product',
      data: data
    }))
  };
  return asyncAction;
}

export function addToCart(productID) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      url: "htttp://localhost:4000/api/",
      contentType: 'application/json',
      data: JSON.stringify({id: productID})
    })
    .then(data => dispatch({
      type: 'add-to-cart'
    }));
  };
  return asyncAction;
}
