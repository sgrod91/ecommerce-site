import $ from 'jquery';
import {hashHistory} from 'react-router';

export function changeState(value, propName) {
  return {
    type: 'change-state',
    value: value,
    propName: propName
  };
}

export function error(resp) {
  return {
    type: 'error',
    error: resp.responseText
  };
}

export function submitForm(username, email, first_name, last_name, password, confirm){
  let asyncAction = function(dispatch) {
      $.ajax({
        type: "POST",
        url: "http://localhost:4000/api/user/signup",
        contentType: 'application/json',
        data: JSON.stringify({
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
        confirm: confirm})
      })
      .then(result => {
        dispatch({type: 'success'});
        hashHistory.push('/login')
      })
      .catch(resp => dispatch(error(resp)));
  };
  return asyncAction;
}
