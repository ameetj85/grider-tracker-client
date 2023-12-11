import createDataContext from './createDataContext';
import tracker from '../api/trackerApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracker.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with Sign Up',
      }); //error.response.data
    }
  };
};

const signIn = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in
    // if sign in === success, modify state and indicae that we are authenticated (token)
    // if sign in !== success, we need to reflect an error message some place
  };
};

const signOut = (dispatch) => {
  return () => {
    // make api request to sign out
    // if sign out === success, modify state and indicae that we are authenticated (token)
    // if sign up !== success, we need to reflect an error message some place
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: null, errorMessage: '' }
);
