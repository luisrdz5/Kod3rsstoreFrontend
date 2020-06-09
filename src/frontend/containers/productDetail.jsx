import React from 'react';
import { connect } from 'react-redux'

import ProductDetailCard from '../components/ProductDetailCard';



const ProductDetail = (props) => {
    const { id } = props.match.params;
    const { products } = props;
    const product = products.filter( item => item.id === id);
    return (
        <>
          <ProductDetailCard {...product} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      products: state.products,
    };
  };
export default connect( mapStateToProps, null)(ProductDetail);
