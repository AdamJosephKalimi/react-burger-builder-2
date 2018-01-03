import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // This is a challenging concept
  // Transforming an object of key: value pairs into
  // an array of burger ingredients where the value of that object (in BurgerBuilder.js)
  // is important to decide how many ingredients are needed
  // and the Key is important for which type of ingredient
  // is needed.
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });

    });
  return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>
    );

};

export default burger;
