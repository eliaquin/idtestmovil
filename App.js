import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { Card, CardSection } from './src/components/common';

export default class App extends Component {
  state = {
     estado: 'deslogueado'
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={{ alignSelf: 'stretch' }}>
          <CardSection>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>OPTIC ID TEST</Text>
          </CardSection>
          <CardSection>
            <FormLabel>Nombre de Usuario</FormLabel>
            <FormInput />
          </CardSection>
        </Card>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#337ab7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
