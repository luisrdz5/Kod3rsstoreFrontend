import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Categories.styl'

const Categories = (props) => {
    const { categories } = props;
    let styleId=0;
    let srcId="f";
    let srcStyle= "";
    return (
    <div className="Main__Categories">
        {categories.map(category => {
            styleId++;
            console.log(category);
        return (
            <div className="Main__Category">
                <span className="Main__Category--title">{category.title}</span>
                <div className="Main__Category--img">
                    <Link to={category.link} key={styleId}>
                        <picture key={styleId}>
                            <source srcset={category.imageBig} media="(min-width: 1200px)"/>
                            <source srcset={category.imageMedium} media="(min-width: 600px)"/>
                            <img src={category.imageSmall} alt="category image" />
                        </picture>
                    </Link>
                </div>
            </div>
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