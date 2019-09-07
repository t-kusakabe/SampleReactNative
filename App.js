/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>React Nativeへようこそ！</Text>
      <Text style={styles.instructions}>React Nativeで広がるアプリの世界</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
});

export default App;
