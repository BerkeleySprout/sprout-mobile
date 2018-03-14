import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./Styles/LoginScreenStyle";
import Images from "../Themes/Images"
import Metrics from "../Themes/Metrics"

export default class LoginScreen extends Component {

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
        style={styles.logo}
        source={ Images.logo }>

        </Image>
      </View>
    )
  }
}
