### Create React Native app

npx create-expo-app tracks

### Install dependencies

npm i --legacy-peer-deps

### React Native Navigation Info

https://reactnavigation.org/docs/getting-started/

### React Native Elements

https://reactnativeelements.com/
https://www.npmjs.com/package/react-native-elements
Install: npm i react-native-elements

### Use ngrok to connect to express api

Run ngrok in the api solution

### React Native Async Storage

To store data - token

npm install @react-native-async-storage/async-storage --legacy-peer-deps
OR
npx expo install @react-native-async-storage/async-storage@~1.17.3 -- --legacy-peer-deps (preferred method)

Then, update the import in AuthContext to this:

import AsyncStorage from '@react-native-async-storage/async-storage';

### Section 15 Notes

onWillFocus vs onWillBlur Update
In the upcoming lecture, we will be adding NavigationEvents to our SignupScreen and SigninScreen and passing it event props to clear our error messages. You may notice that the error message is only cleared from SignupScreen to SigninScreen, but does not work if you are navigating from Signinscreen to SignupScreen.

To resolve this, use onWillFocus:

<NavigationEvents onWillFocus={clearErrorMessage}

Please remember to make this change both SignupScreen and SigninScreen.

### React Native Maps

https://github.com/react-native-maps/react-native-maps
https://www.npmjs.com/package/react-native-maps
https://docs.expo.dev/versions/latest/sdk/map-view/

Install: npx expo install react-native-maps -- --legacy-peer-deps
