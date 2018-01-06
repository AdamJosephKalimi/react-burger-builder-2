import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  // Remember, this is not where we are controlling how
  // the sideDrawer gets opened, only how it closes.
  // How it opens will be controlled though clicking
  // on the Menu btn


  // Here, if the props.open is true, render classes.Open, which
  // will open the SideDrawer. Otherwise attachedClasses is false
  // and the sideDrawer is showing with the backdrop behind it
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  // We use join in {attachedClasses.join(' ')} bc you cannot
  // pass an array of strings in there- only a string.
  // So it's joined with a space.
  return (
      <Aux>
          <Backdrop show={props.open} clicked={props.closed}/>

          <div className={attachedClasses.join(' ')} style={{height: props.height}}>
              <div className={classes.Logo}>
                  <Logo />
              </div>
              <nav>
                  <NavigationItems />
              </nav>
          </div>
      </Aux>
    );

  };

export default sideDrawer;
