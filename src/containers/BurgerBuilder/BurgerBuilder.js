import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../..//components/Burger/OrderSummary/OrderSummary';

// Name constants you want to use as global constants
// using ALLCAPS

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {

// The ingredients here is an object
// (Not an array and not a hash)
    state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    }

    updatePurchaseState (ingredients) {
      // To sum - turn the ingredients object above
      // into an array and sum.
      // The key will come as an array of strings.
      const sum = Object.keys(ingredients)
        .map(igKey => {
          // Here we access the key, then their values,
          // Which will be the number we want.
            return ingredients[igKey];
        })
        // Now we have an array ov Values
        // We will call reduce to take all the
        // values and return a single number: The sum of all ingredients

        // There will be a function that is executed on each
        // item in this map array.
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        // If there is at least 1 ingredient, purchasable becomes true
      this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        // Try refactoring this on your own into
        // less lines
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
          return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        // Try refactoring this on your own into
        // less lines
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
      this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
      this.setState({purchasing: false});
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
              <Aux>
                  <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                      <OrderSummary ingredients={this.state.ingredients}/>
                  </Modal>
                  <Burger ingredients={this.state.ingredients}/>
                  <BuildControls
                      ingredientAdded={this.addIngredientHandler}
                      ingredientRemoved={this.removeIngredientHandler}
                      disabled={disabledInfo}
                      purchasable={this.state.purchasable}
                      ordered={this.purchaseHandler}
                      price={this.state.totalPrice}/>
              </Aux>
        );
    }
}

export default BurgerBuilder;
