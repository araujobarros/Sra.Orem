import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import ProductCard from './ProductCard';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


function ProductList() {

  const { productsData } = useContext(DataContext)
  return (
    <div>
      <div>Aqui será feito um map com as informações do produto cedidas por apicontext</div>
      {productsData.map(product => 
        (<ProductCard exemploProps= {product.group}/>)
      )}
    </div>
  )
}

// ProductList.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//     id: PropTypes.string,
//   }).isRequired,
// };

export default ProductList;