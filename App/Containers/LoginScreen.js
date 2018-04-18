import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from "./Styles/LoginScreenStyle";
import { Images, Metrics, Colors } from "../Themes"
import firebase from 'react-native-firebase';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '' 
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onPressSignIn() {
    console.log(this.state.email);
    console.log(this.state.password);
    this.props.navigation.navigate('Tabs')
  }

  onPressSignUp() {
    this.props.navigation.navigate('Signup')
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
          onPress={this.onPressSignIn.bind(this)}
          title="Sign In"
          color={Colors.snow}
          buttonStyle={styles.button}
          textStyle={styles.text}
        />

        <Button
          onPress={this.onPressSignIn.bind(this)}
          title="Sign In with Facebook"
          color={Colors.snow}
          buttonStyle={styles.buttonFB}
          textStyle={styles.text}
        />

        <Text style={styles.forgot}>
        Forgot password?
        </Text>

        <Text style={styles.signUpAction}>
        Don't have an account? <Text onPress={this.onPressSignUp.bind(this)} 
                                     style={{textDecorationLine: 'underline'}}>Sign up!</Text>
        </Text>
      </View>
    )
  }
}
