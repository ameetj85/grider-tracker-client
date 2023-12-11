import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
  return <View style={styles.spacerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  spaceStyle: {
    margin: 15,
  },
});

export default Spacer;
