import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from "./Styles/LoginScreenStyle";
import { Images, Metrics, Colors } from "../Themes"
import firebase from 'react-native-firebase';

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
    this.props.navigation.navigate('LoginScreen')
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

        <TextField
          style={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"words"}
          autoCorrect={false}
          label='Full Name (First-Last)'
          labelTextStyle={styles.text}
          titleTextStyle={styles.text}
          affixTextStyle={styles.text}
          lineWidth={1.5}
          value={this.state.fullname}
          onChangeText={(fullname) => this.setState({fullname})}
        />

        <TextField
          style={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"email-address"}
          label='Email Address'
          labelTextStyle={styles.text}
          titleTextStyle={styles.text}
          affixTextStyle={styles.text}
          lineWidth={1.5}
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
        />

        <TextField
          style={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          label='Password'
          labelTextStyle={styles.text}
          titleTextStyle={styles.text}
          affixTextStyle={styles.text}
          lineWidth={1.5}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />

        <Button
          onPress={this.onPressCreate.bind(this)}
          title="Create Account"
          color={Colors.snow}
          buttonStyle={styles.button}
          textStyle={styles.text}
        />

        <Text style={styles.signUpAction}>
        Already have an account? <Text onPress={this.onPressLogin.bind(this)} 
                                     style={{textDecorationLine: 'underline'}}>Log in!</Text>
        </Text>
      </View>
    )
  }
}
