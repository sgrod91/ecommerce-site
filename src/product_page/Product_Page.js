import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Product_Page.actions';

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.getSinglePage(this.props.params.id);
  } // call function immediately when component is mounted.
  componentWillReceiveProps(newProps) {
    console.log('triggered');
    if(this.props.params.id !== newProps.params.id) {
      console.log('conditional triggered');
      this.props.getSinglePage(newProps.params.id);
    } // if the URL is altered, this will detect it and update the page based on the new data entered.
  }
   render() {
    return(
      <div><ul>
        <li>{this.props.product && this.props.product.name}</li>
        <li>{this.props.product && this.props.product.price}</li>
        <li>{this.props.product && this.props.product.description}</li>
      </ul>
      <button onClick={() => this.props.addToCart(this.props.product.id)}>Add to cart</button>
      </div>
    )
  }
}

const ProductPageContainer = ReactRedux.connect(
  state => state.product,
  actions
)(ProductPage);

export default ProductPageContainer;
