import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiChefHat } from '@mdi/js'

class ChefHat extends Component {
  render() {
    return (
      <Icon path={mdiChefHat}
        horizontal
        size={0.7}
        />
    )
  }
} 

export default ChefHat;