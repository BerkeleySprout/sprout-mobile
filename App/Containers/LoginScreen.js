import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import styles from "./Styles/LoginScreenStyle";
import Images from "../Themes/Images"
import Metrics from "../Themes/Metrics"
import Colors from "../Themes/Colors"

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '' 
    };
  }

  static navigationOptions = {
    title: 'LoginScreen',
  }

  onPressSignIn() {
    console.log(1)
  }

  render () {
    return (
      <View style={styles.container}>
        
        <Image
          style={styles.logo}
          source={ Images.logo }>
        </Image>
        
        <Text style={styles.title}>
        Sign In
        </Text>

        <Text style={styles.rowLabel}>
        Email
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => this.setState({email})}
          editable = {true}
          value={this.state.email}
        />

        <Text style={styles.rowLabel}>
        Password
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          editable = {true}
          value={this.state.password}
        />


        <Button
          onPress={this.onPressSignIn.bind(this)}
          title="Sign In"
          color={Colors.snow}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />

        <Button
          onPress={this.onPressSignIn.bind(this)}
          title="Sign In with Facebook"
          color={Colors.snow}
          buttonStyle={styles.buttonFB}
          textStyle={styles.buttonText}
        />
      </View>
    )
  }
}
