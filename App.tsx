import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from "react-native";
import Routes from './src/Navigation/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
