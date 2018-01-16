import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render () {
      let ingredient = null;

        switch (this.props.type) {
          case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
          case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
          case ('meat'):
            ingredient = <div className={classes.Meat}>Python</div>;
            break;
          case ('cheese'):
            ingredient = <div className={classes.Cheese}>Jquery</div>;
            break;
          case ('salad'):
            ingredient = <div className={classes.Salad}>Apache</div>;
            break;
          case ('bacon'):
            ingredient = <div className={classes.Bacon}>Node.js</div>;
            break;
          case ('tomato'):
            ingredient = <div className={classes.Tomato}>C#</div>;
            break;
          case ('egg'):
            ingredient = <div className={classes.Egg}>PHP</div>;
            break;
          case ('relish'):
            ingredient = <div className={classes.Relish}>Django</div>;
            break;
          case ('avocado'):
            ingredient = <div className={classes.Avocado}>WeChat</div>;
            break;
          case ('ketchup'):
            ingredient = <div className={classes.Ketchup}>HTML</div>;
            break;
          case ('mustard'):
            ingredient = <div className={classes.Mustard}>CSS</div>;
            break;
          case ('onion'):
            ingredient = <div className={classes.Onion}>MySQL</div>;
            break;
          case ('mayo'):
            ingredient = <div className={classes.Mayo}>JavaScript</div>;
            break;
          case ('salmon'):
            ingredient = <div className={classes.Salmon}>React.js</div>;
            break;
          case ('chicken'):
            ingredient = <div className={classes.Chicken}>Ruby on Rails</div>;
            break;
          default:
            ingredient = null;
        }

    return ingredient;

    }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
