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
      <div>
        <h1>{this.props.product && this.props.product.name}</h1>
        {this.props.product && <img src={this.props.product.image_path} width="300"/>}<br/><br/>
        ${this.props.product && this.props.product.price}<br/><br/>
        {this.props.product && this.props.product.description}<br/><br/>

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
