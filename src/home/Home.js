import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { Link } from 'react-router';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    return (
      <div>
        <h1>Welcome to this site!</h1>
        {this.props.products.map(item =>
          <ul key={item.id}>
            <li>{item.name}</li>
          <li><Link to={"/product/" + item.id}> {item.name} Page</Link></li>
          </ul>
          )}
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
