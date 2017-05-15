import $ from 'jquery';

export function changeState(username, password) {
  let asyncAction = function(dispatch) {
    $.ajax('http://localhost:4000/api/user/login')
    .then(data => dispatch({
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify
    }));
  };
  return asyncAction;
}
