import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    // We are going to map the array in the line above
    // into an array of JSX elements
      .map(igKey => {
          // Here, igKey is the key in the array, and props.ingredients[igKey]
          // is the way we access the value
          // The inline style will capitalize the first letter
          // of each key, bc in the BurgerBuilder ingredients,
          // they are all lower-case.
          return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                  </li>);
      });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>PROCEED</Button>
      </Aux>
      );
};

export default orderSummary;
