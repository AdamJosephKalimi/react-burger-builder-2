import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

// The ingredients here is an object
// (Not an array and not a hash)
    state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }
    render () {
        return (
              <Aux>
                  <Burger ingredients={this.state.ingredients}/>
                  <div>Build Controls</div>
              </Aux>
        );
    }
}

export default BurgerBuilder;
