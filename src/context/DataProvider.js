import React from 'react';
import DataContext from './DataContext';
import products from '../services/productsData';

class DataProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      productsData: products
    };
  }

  
  render() {
    const { children } = this.props;
    return (
      <DataContext.Provider
        value={ { ...this.state } }
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;