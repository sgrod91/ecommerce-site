import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './login.actions';

class Login extends React.Component {
  render() {
    return(
      <div>
        <form>
        <input onChange={(event) => this.props.changeState(event.target.value, 'username')} type="text" placeholder="username" value={this.props.username}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'password')} type="text" placeholder="password" value={this.props.password}/>
        </form>
      </div>
    )
  }
}

const LoginContainer = ReactRedux.connect(
  state => state.login,
  actions
)(Login);

export default LoginContainer;
