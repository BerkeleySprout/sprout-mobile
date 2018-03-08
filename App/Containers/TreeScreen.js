import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TreeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Tree",
    tabBarIcon: ({ tintColor }) => <Icon name="tree" size={20} color={tintColor}/>
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
