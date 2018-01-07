import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

export default class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lisa' })}
          title="Chat with Lisa"
        />
      </View>
    );
  }
}
