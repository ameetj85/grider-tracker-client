import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 40.66288 + i * 0.001,
        longitude: -73.551516 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 40.66288 - i * 0.002,
        longitude: -73.551516 + i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 40.66288,
        longitude: -73.551516,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default Map;
