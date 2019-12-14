import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LibraryList from './src/components/LibraryList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', padding: 5, color: '#333', borderBottomWidth: 2, margin: 5, marginBottom: 10, borderBottomColor: '#FD4675'}}>Tech Stack</Text>
        <LibraryList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
});
