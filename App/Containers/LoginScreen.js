import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import styles from "./Styles/LoginScreenStyle";
import { Images, Metrics, Colors } from "../Themes"
import firebase from 'react-native-firebase';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.onFocus = this.onFocus.bind(this);
    this.emailRef = this.updateRef.bind(this, 'email')
    this.passwordRef = this.updateRef.bind(this, 'password')

    this.state = { 
      email: '',
      password: '',
      loading: false,
      errors: {
        email: '',
        password: ''
      }
    }
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Tabs')
      }
    });
  }

  onFocus() {
    var errors = this.state.errors

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onPressSignIn() {
    let errors = {};
    ['email', 'password']
    .forEach((name) => {
      let value = this[name].value();
      if (!value) {
        errors[name] = 'Should not be empty';
      } else {
        if ('password' === name && value.length < 6) {
          errors[name] = 'Must be at least 6 characters long';
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if ('email' === name && reg.test(value) === false) {
          errors[name] = "Email is badly formatted"
        }
      }
    });
    this.setState({ errors });
    if (!errors["email"] && !errors["password"]) {
      const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          // If you need to do anything with the user, do it here
          // The user will be logged in automatically by the 
          // `onAuthStateChanged` listener we set up in App.js earlier
          console.log("I'M LOGGED IN!")
          console.log(user)
        })
        .catch((error) => {
          const { code, message } = error
          console.log(message)
          let errors = {};
          errors["email"] = "Your email or password is invalid"
          errors["password"] = "Your email or password is invalid"
          this.setState({ errors });
        });
    }
  }

  onPressSignUp() {
    this.props.navigation.navigate('SignupScreen')
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
          ref={this.emailRef}
          style={styles.text}
          labelTextStyle={styles.text}
          titleTextStyle={styles.text}
          affixTextStyle={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"email-address"}
          label='Email Address'
          error={this.state.errors.email}
          lineWidth={1.5}
          value={this.state.email}
          onFocus={this.onFocus}
          onChangeText={(email) => this.setState({email})}
          onSubmitEditing={this.onSubmitEmail}
          returnKeyType='next'
        />

        <TextField
          ref={this.passwordRef}
          style={styles.text}
          labelTextStyle={styles.text}
          titleTextStyle={styles.text}
          affixTextStyle={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          label='Password'
          error={this.state.errors.password}
          lineWidth={1.5}
          value={this.state.password}
          onFocus={this.onFocus}
          onChangeText={(password) => this.setState({password})}
          onSubmitEditing={this.onSubmitPassword}
          returnKeyType='done'
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
