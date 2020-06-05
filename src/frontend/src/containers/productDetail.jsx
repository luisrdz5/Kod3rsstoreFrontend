import React from 'react';


const ProductDetail = (props) => {
    const { id } = props.match.params;

    return (
        <>
            Product Detail {id}
        </>
    )
}
export default ProductDetail;
