import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ProductDetailCard.styl';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';

const ProductDetail = (props) => {
  const product = props[0];
  const { description, id, image, price, qty, title } = product; 
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart(){
    for(let i=0;i<quantity;i++){
      props.addToCart(product);
    }
    setQuantity(1);
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
          <img src={image} alt="our products" /> 
        </div>
        <div className="Card-detail__price">$ {price} MXN</div>
        <div className="Card-detail__description">{description}</div>
        <div className="Card-detail__btn-cart">
            <div onClick={removeQty}className="Card-detail_remove-btn">-</div>
            <div className="Card-detail_qty"><label>{quantity}</label></div>
            <div onClick={addQty} className="Card-detail_add-btn">+</div>
        </div>
        <div onClick={handleAddToCart} className="Card-detail__add-to-cart">
          <label>Agregar al carrito</label>
        </div>
      </div>
    </section>
    )
};

const mapDispatchToProps = {
    addToCart,
  };

export default connect(null, mapDispatchToProps )(ProductDetail);