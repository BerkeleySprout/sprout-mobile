import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import styles from "./Styles/SignupScreenStyle";
import { Images, Metrics, Colors } from "../Themes"

export default class SignupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      fullname: ''
    };
  }

  onPressCreate() {
    this.props.navigation.navigate('Tabs')
  }

  onPressLogin() {
    this.props.navigation.navigate('Login')
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
        Full Name
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(fullname) => this.setState({fullname})}
          editable = {true}
          value={this.state.fullname}
        />

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
          onPress={this.onPressCreate.bind(this)}
          title="Create Account"
          color={Colors.snow}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />

        <Text style={styles.signUpAction}>
        Already have an account? <Text onPress={this.onPressLogin.bind(this)} 
                                     style={{textDecorationLine: 'underline'}}>Log in!</Text>
        </Text>
      </View>
    )
  }
}
