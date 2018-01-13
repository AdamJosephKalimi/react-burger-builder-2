import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import CheckoutSummary from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className=CheckoutSummary>
            <h1>We hope you like it!</h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button
                btnType="Sucess"
                clicked>PROCEED</Button>
        </div>
      );

}

export default checkoutSummary;
