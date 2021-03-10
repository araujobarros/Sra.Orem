import React, { useState } from 'react';
import DataContext from './DataContext';
import products from '../services/productsData';

function DataProvider( { children }) {

  const [productsData] = useState(products)
  const contextValue = {
    productsData
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