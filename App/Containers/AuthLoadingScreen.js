import React, { Component } from 'react'
import { View, Spinner } from 'react-native'
import styles from "./Styles/LoginScreenStyle"
import firebase from 'react-native-firebase'

export default class AuthLoadingScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Tabs')
      } else {
        this.props.navigation.navigate('LoginScreen')
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription()
  }

  render() {
    return (
      <View>
        <Spinner size="large" />
      </View>
    );
  }
}