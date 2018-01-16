import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Bacon (Node.js)', type: 'bacon'},
    {label: 'Cheese (Jquery)', type: 'cheese'},
    {label: 'Meat (Python)', type: 'meat'},
    {label: 'Salad (Apache)', type: 'salad'},
    {label: 'Onion (MySQL)', type: 'onion'},
    {label: 'Chicken (Ruby on Rails)', type: 'chicken'},
    {label: 'Salmon (React.js)', type: 'salmon'},
    {label: 'Tomato (C#)', type: 'tomato'},
    {label: 'Egg (PHP)', type: 'egg'},
    {label: 'Avocado (WeChat)', type: 'avocado'},
    {label: 'Relish (Django)', type: 'relish'},
    {label: 'Ketchup (HTML)', type: 'ketchup'},
    {label: 'Mustard (CSS)', type: 'mustard'},
    {label: 'Mayo (JavaScript)', type: 'mayo'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              // this line is sending the type from the array above
              // over to the addIngredientHandler, where it is
              // entered as an argument.
              added={() => props.ingredientAdded(ctrl.type)}
              removed={() => props.ingredientRemoved(ctrl.type)}
              disabled={props.disabled[ctrl.type]}/>
        ))}


        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
  );

export default buildControls;



// The logic for the ODER NOW button will be in the
// BurgerBuilder bc that's where the state is managed
