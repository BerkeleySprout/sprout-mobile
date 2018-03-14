import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionBar from 'react-native-action-bar'
import styles from './Styles/TreeScreenStyle'

export default class TreeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Tree",
    tabBarIcon: ({ tintColor }) => <Icon name="tree" size={20} color={tintColor}/>
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Your Tree'}
          onLeftPress={() => console.log('Left!')}
          rightIcons={[
              {
                  name: 'menu',
                  onPress: () => console.log('Right Plus !'),
              },
          ]}
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
