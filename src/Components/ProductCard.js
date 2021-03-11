import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function ProductCard( { exemploProps }) {
  return (
    <div>{exemploProps.title}</div>
  );
}

// ProductCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//     id: PropTypes.string,
//   }).isRequired,
// };

export default ProductCard;