import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

export default class FirstPage extends React.Component {
  render(){
    
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>This is Screen</Text>

        <TouchableHighlight
         style={{}} onPress={
           () => navigate("Second", {})
         }
        >
         <Text> Go to screen 2</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
