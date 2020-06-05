import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Categories.styl'


const Categories = (props) => {
    const { promotions } = props;
    let styleId=0;
    let srcId="f";
    let srcStyle= "";
    return (
        <div className="Main__Promotions">
        {promotions.map(promotion => {
            styleId++;
            srcStyle=srcId+styleId;
            return(
            <Link to={promotion.link} key={styleId}>
                <img key={styleId} id={srcStyle} src={promotion.image}  alt={promotion.title}/>
            </Link>
        )})}
      </div>
    );
}
const mapStateToProps = state => {
    return {
      categories: state.categories,
    };
  };
  
  
  export default connect(mapStateToProps, null)(Categories);