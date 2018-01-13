import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../..//components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


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
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }

    // This is a good method for fetching data
    componentDidMount () {
        axios.get('https://burgerbuilder-bf99e.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true})
            });
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

    purchaseContinueHandler = () => {
    //   this.setState( { loading: true } );
    //   //alert('You are proceeding!');
    //   const order = {
    //       ingredients: this.state.ingredients,
    //       // On production, calculate this on the server
    //       // so users cannot manipulate it before it's
    //       // sent to the server.
    //       price: this.state.totalPrice,
    //       customer: {
    //           name: 'Adam Kalibaba',
    //           address: {
    //             street: '1213 Main Lane',
    //             zipCode: '11213',
    //             country: 'China'
    //           },
    //           email: 'Test@testease.com'
    //       },
    //       deliverMethod: 'fastest'
    //   }

    //   // orders will be the name of the node created
    //   // in firebase
    //   axios.post('/orders.json', order)
    //     .then(response => {
    //       this.setState({ loading: false, purchasing: false });
    //     })
    //     .catch(error => {
    //       this.setState({ loading: false, purchasing: false });
    //     });
          this.props.history.push('/checkout');
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
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
            orderSummary = <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}/>
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }



        return (
          // The OrderSummary should only rerender when the Modal is
          // showing. Not at any other time.
              <Aux>
                  <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                  </Modal>
                  {burger}
              </Aux>
        );
    }
}

// axios needs to be the second argument bc withErrorHandler
// takes it as the second argument in its own component.
// We can use this higher order component to display an
// error message for any component that uses axios.

export default withErrorHandler(BurgerBuilder, axios);
