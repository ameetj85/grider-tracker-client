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
