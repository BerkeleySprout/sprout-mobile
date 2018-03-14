import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/TreeScreenStyle'

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
        <Image
        style={styles.imageBackground}
        resizeMode={'cover'}
        source={ require('../Images/sprout-tree.png') }>

        </Image>
      </View>
    )
  }
}
