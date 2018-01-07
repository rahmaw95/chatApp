import React from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import AllContactsScreen from '../pages/All.chatScreen';
import RecentChatsScreen from '../pages/Recent.chat';
import ChatScreen from '../pages/chatScreen'


const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
   },
  Chat: { screen: ChatScreen },
});


export default SimpleApp;
