import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.actions';

class Signup extends React.Component {
  render() {
    let noMatch;
    if(this.props.password !== this.props.confirm) {
      noMatch = (<h4>Passwords do not match</h4>)
    }
    return(
      <div>
        <form>
          <input onChange={(event) => this.props.changeState(event.target.value, 'username')} type="text" placeholder="username" value={this.props.username}/>
          <input onChange={(event) => this.props.changeState(event.target.value, 'email')} type="text" placeholder="email" value={this.props.email}/>
          <input onChange={(event) => this.props.changeState(event.target.value, 'first_name')} type="text" placeholder="first name" value={this.props.first_name}/>
          <input onChange={(event) => this.props.changeState(event.target.value, 'last_name')} type="text" placeholder="last name" value={this.props.last_name}/>
          <input onChange={(event) => this.props.changeState(event.target.value, 'password')} type="password" placeholder="password" value={this.props.password}/>
          <input onChange={(event) => this.props.changeState(event.target.value, 'confirm')} type="password" placeholder="confirm password" value={this.props.confirm}/>
          <button onClick={() => this.props.submitForm(this.props.username, this.props.email, this.props.first_name, this.props.last_name, this.props.password, this.props.confirm)}> Submit </button>
        </form>
        {noMatch}
      </div>
    );
  }
}

const SignupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(Signup);

export default SignupContainer;
