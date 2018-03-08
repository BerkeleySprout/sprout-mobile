import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class InsightScreen extends Component {
	
	static navigationOptions = {
    tabBarLabel: "Insight",
    tabBarIcon: ({ tintColor }) => <Icon name="line-chart" size={20} color={tintColor}/>
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
