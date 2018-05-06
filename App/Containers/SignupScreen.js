import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from "./Styles/SignupScreenStyle";
import { Images, Metrics, Colors } from "../Themes"
import firebase from 'react-native-firebase';

export default class SignupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      fullname: '',
      loading: false,
      error: '',
      pwerror: '',
    };
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Tabs")
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onPressCreate() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => { 
        this.setState({ error: '', loading: false }); 
      })
      .catch((error) => {
        const { code, message } = error
        this.setState({  })
        console.log(message)
      });
  }

  onPressLogin() {
    this.props.navigation.goBack()
  }

  onChangePassword(password) {
    this.setState({password})
    if (password.count < 5) {
      this.setState({ pwerror: 'Password is too short' })
    } else {
      this.setState({ pwerror: '' })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        
        <Image
          style={styles.logo}
          source={ Images.logo }>
        </Image>
        
        <Text style={styles.title}>
        Sign Up
        </Text>

        <TextField
          style={styles.text}
          containerStyle={styles.textInput}
          autoCapitalize={"words"}
          autoCorrect={false}
          label='Full Name (e.g. Jane Doe)'
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
          onChangeText={(email) => 
            this.setState({email})
          }
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
          onChangeText={(password) => this.onChangePassword(password)}
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
