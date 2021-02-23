import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render() {
    return (
      <div>
        Aqui ficará o Cardápio
      </div>
    );
  }
}
Menu.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Menu;
