import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ProductDetailCard.styl';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';

const ProductDetail = (product) => {
  const [quantity, setQuantity] = useState(1);
  const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";    
  const { price, image, title, description, id} = product[0];

  function handleAddToCart(){
    product.addToCart(product[0])
  }
  function addQty(){
      setQuantity(quantity+1)
  }
  function removeQty(){
    if(quantity>1){
        setQuantity(quantity-1)
    }
  } 

  return (
    <section className="Card-detail-product">
      <div className="Card-detail-container">
        <div className="Card-detail__title">{title}</div>                
        <div className="Card-detail__image">
          <img src={image? image : url_dummy_img} alt="our products" /> 
        </div>
        <div className="Card-detail__price">$ {price} MXN</div>
        <div className="Card-detail__description">{description}</div>
        <div className="Card-detail__btn-cart">
            <div onClick={removeQty}className="Card-detail_remove-btn">-</div>
            <div className="Card-detail_qty"><label>{quantity}</label></div>
            <div onClick={addQty} className="Card-detail_add-btn">+</div>
            <div onClick={handleAddToCart} className="Card-detail__add-to-cart"><label>Add to cart</label></div>
        </div>
      </div>
    </section>
    )
};

const mapDispatchToProps = {
    addToCart,
  };

export default connect(null, mapDispatchToProps )(ProductDetail);