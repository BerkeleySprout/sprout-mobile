import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from 'react-native-searchbar'
import styles from './Styles/TreeScreenStyle'

export default class CommunityScreen extends Component {

	static navigationOptions = {
    tabBarLabel: "Community",
    tabBarIcon: ({ tintColor }) => <Icon name="users" size={20} color={tintColor}/>
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
