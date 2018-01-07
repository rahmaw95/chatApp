import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import Chat from '../../components/chat.component';

export default class ChatList extends React.Component{
  render(){
    return(
      <Chat
        chatName={this.props.val.name}
        contentChat={this.props.val.message}/>
    )
  }
}
