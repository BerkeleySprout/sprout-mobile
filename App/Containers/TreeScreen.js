import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionBar from 'react-native-action-bar'
import styles from './Styles/TreeScreenStyle'
import firebase from 'react-native-firebase';

export default class TreeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Tree",
    tabBarIcon: ({ tintColor }) => <Icon name="tree" size={20} color={tintColor}/>
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.navigate('LoginScreen')
      }
    });
  }

  onPressLogOut() {
    try {
        firebase.auth().signOut()
    } catch (e) {
        console.log(e)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Your Tree'}
          titleStyle={styles.barText}
          titleContainerStyle={styles.barTextContainer}
          leftIconName={'menu'}
          rightIcons={[
                        {
                            name: 'star',
                            badge: '1',
                            onPress: this.onPressLogOut.bind(this),
                        },
                        ]}
          onLeftPress={() => console.log('Left!')}
        />
        <View style={styles.imageContainer}>
          <Image
          style={styles.imageBackground}
          resizeMode={'cover'}
          source={ require('../Images/sprout-tree.png') }>
          </Image>
        </View>
      </View>
    )
  }
}
