import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
      <Text style={{ fontSize: 48, marginBottom: 300 }}>Account Screen</Text>
      <Button title='Sign Out' onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
    marginBottom: 250,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default AccountScreen;
