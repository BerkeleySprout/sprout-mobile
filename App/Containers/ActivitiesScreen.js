import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'


export default class ActivitiesScreen extends Component {
	
	static navigationOptions = {
    tabBarLabel: "Activities",
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
          THIS IS THE ACTIVITIES SCREEN
        </Text>
      </View>
    )
  }
}
