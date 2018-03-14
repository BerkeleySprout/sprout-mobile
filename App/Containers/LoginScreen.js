import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./Styles/LoginScreenStyle";
import Images from "../Themes/Images"
import Metrics from "../Themes/Metrics"
import Colors from "../Themes/Colors"

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'LoginScreen',
  }

  onPressSignIn() {
    this.props.navigation.navigate('Tabs')
  }

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
        
        <Button
          onPress={this.onPressSignIn}
          title="Sign In"
          color={Colors.emerald}
        />
      </View>
    )
  }
}
