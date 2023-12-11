import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer>
        <Text style={{ marginBottom: 20 }} h3>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          label='Email'
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </Spacer>
      <Spacer>
        <Input
          label='Password'
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
      </Spacer>

      {state.errorMessage ? (
        <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
      ) : null}

      <Button title='Sign Up' onPress={() => signup({ email, password })} />

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.linkStyle}>
            Already have an account? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

// hide the page header
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
  },
  errorMessageStyle: {
    color: 'red',
    fontSize: 18,
    marginBottom: 10,
  },
  linkStyle: {
    color: 'blue',
    marginLeft: 5,
    marginTop: 15,
  },
});

export default SignupScreen;
