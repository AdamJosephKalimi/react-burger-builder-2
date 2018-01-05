import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
  );

export default layout;

// Wrapping the JSX with the <Aux></Aux> tags
// allows us to render adjacent JSX elements,
// otherwise there would be an error.
