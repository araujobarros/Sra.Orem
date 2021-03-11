import React, { useState } from 'react';
import DataContext from './DataContext';
import products from '../services/productsData';

function DataProvider( { children }) {

  const [productsData] = useState(products)
  const [productsFromMLB, setProducts] = useState([])
  const [isLoad, setLoad] = useState(false)

  const contextValue = {
    productsData,
    productsFromMLB,
    isLoad,
    setProducts,
    setLoad
  }

  return (
    <DataContext.Provider
        value={{...contextValue}} 
      >
        {children}
      </DataContext.Provider>
  )
}

export default DataProvider;