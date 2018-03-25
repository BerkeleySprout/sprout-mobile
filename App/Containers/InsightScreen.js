import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Timeline from 'react-native-timeline-listview'
import ActionBar from 'react-native-action-bar'
import styles from './Styles/InsightScreenStyle'
import Colors from '../Themes/Colors'

export default class InsightScreen extends Component {

  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  }
	
	static navigationOptions = {
    tabBarLabel: "Insight",
    tabBarIcon: ({ tintColor }) => <Icon name="calendar" size={20} color={tintColor}/>
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Insights'}
          titleStyle={styles.barText}
          titleContainerStyle={styles.barTextContainer}
          onLeftPress={() => console.log('Left!')}
        />
        <View style={styles.timelineContainer}>
          <Timeline
            data={this.data}
            circleSize={20}
            circleColor={Colors.green2}
            innerCircle={'dot'}
            lineColor={Colors.cloud}
            timeStyle={{textAlign: 'center', backgroundColor: Colors.green2, color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
            descriptionStyle={{color:'gray'}}
            options={{
              style: styles.timeline,
              removeClippedSubviews: false
            }}
          />
        </View>
      </View>
    )
  }
}
