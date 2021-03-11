import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import ProductCard from './ProductCard';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


function ProductList() {

  const { productsData,
    productsFromMLB,
    isLoad,
    setProducts,
    setLoad } = useContext(DataContext)

    const url = "https://api.mercadolibre.com/sites/MLB/search\?nickname\=COISASDEANA.COM"

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
      setLoad(true);
      const { results } = await fetch(url)
      .then((response) => response.json());
      console.log(results);
      setProducts(results);
      setLoad(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      console.log(isLoad)
    }, [isLoad])

    if (!isLoad  && productsFromMLB.length !== 0) {
      console.log(productsFromMLB[0])
      return (
        <div>
          <div>Aqui será feito um map com as informações do produto cedidas por apicontext</div>
          {productsFromMLB.map(product => 
            (<ProductCard exemploProps= {product} key={product.id}/>)
          )}
        </div>
      )
    } else {
      return (
        <div>Loadding...</div>
      )
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