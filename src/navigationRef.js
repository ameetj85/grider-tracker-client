// *************************************************************
// Mainly used by authContext.js which is not a React component
// *************************************************************

import { NavigationActions } from 'react-navigation';

let navigator;

// See App.js where we get a ref to the nav variable
export const setNavigator = (nav) => {
  navigator = nav;
};

// routeName = from App.js - Signup, Signin, TrackList, etc
export const navigate = (routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
