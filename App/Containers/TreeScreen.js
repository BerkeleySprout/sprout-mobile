import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'


export default class TreeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Tree",
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
          THIS IS THE TREE SCREEN
        </Text>
      </View>
    )
  }
}
