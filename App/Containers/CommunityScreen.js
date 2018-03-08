import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'


export default class CommunityScreen extends Component {

	static navigationOptions = {
    tabBarLabel: "Community",
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
          THIS IS THE COMMUNITY SCREEN
        </Text>
      </View>
    )
  }
}
