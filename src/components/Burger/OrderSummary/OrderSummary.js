import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
  // This could be a functional component. Doesn't need to be a class.



  // This console.log shows us that the OrderSummary is updating
  // Whenever we add an ingredient, regardless of if the
  // modal is showing the order summary
  // This is unnecessary.

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        // We are going to map the array in the line above
        // into an array of JSX elements
      .map(igKey => {
          // Here, igKey is the key in the array, and props.ingredients[igKey]
          // is the way we access the value
          // The inline style will capitalize the first letter
          // of each key, bc in the BurgerBuilder ingredients,
          // they are all lower-case.
          return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                  </li>);
      });

        return (
            <Aux>
              <h3>Your Order</h3>
              <p>A delicious burger with the following ingredients:</p>
              <ul>
                  {ingredientSummary}
              </ul>
              <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
              <p>Continue to Checkout?</p>
              <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
              <Button btnType="Success" clicked={this.props.purchaseContinued}>PROCEED</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
