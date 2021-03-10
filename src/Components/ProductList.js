import React from 'react';
import DataContext from '../context/DataContext';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    
    return (
      <DataContext.Consumer>
        {( { productsData }) => (
          <div>
            <div>Aqui será feito um map com as informações do produto cedidas por apicontext</div>
            {productsData.map(product => 
              (<div> {product.group} </div>)
            )}
          </div>
        )}
      </DataContext.Consumer>
      
    );
  }
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