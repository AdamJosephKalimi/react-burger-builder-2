import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
    // This className styling will eventually allow either the
    // Success or Danger classes to be rendered
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
  );

  export default button;
