import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'


export default class InsightScreen extends Component {
	
	static navigationOptions = {
    tabBarLabel: "Insight",
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
          THIS IS THE INSIGHT SCREEN
        </Text>
      </View>
    )
  }
}
