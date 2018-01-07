import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';


export default class ChatScreen extends React.Component {
  render(){
    const { chatName, contentChat } = this.props;
    return(
      <View>
        <Text>{chatName}</Text>
        <Text>{contentChat}</Text>
      </View>
    );
  }
}
