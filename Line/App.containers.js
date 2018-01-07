import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
// import Route from './app/routers/index.routes';
import Logo from './pages/Logo/index';
import ChatList from './pages/Chatting/ChatList';
import styles from './styles/stylesheet'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showLogo: true,
      chatArray: [
        {name: 'Tevin', message: 'Hi', date:'10.00pm'},
        {name: 'Rahma', message: 'Hi jg', date:'10.00pm'},
      ],
      showChatList: false
    };
  }

  componentDidMount(){
    setTimeout( () => {
      this.setState({
        showLogo: false,
        showChatList: true
       })
    }, 3000)
  }

  render() {
    const { showLogo, chatArray, showChatList } = this.state;//this.state.showLogo
    let chats = chatArray.map((val, key) => {
        return <ChatList key={key} keyVal={key} val={val} />
    });

    return (
      <View style={showLogo ? styles.container : styles.ChatScreen}>
          {
            showLogo && (
              <Logo showLogo={showLogo} />
            )
          }
        <View>
            {
              showChatList ? <ScrollView>{chats}</ScrollView> : null
            }
        </View>

      </View>


    );
  }
}
