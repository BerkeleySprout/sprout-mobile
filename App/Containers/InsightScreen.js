import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Timeline from 'react-native-timeline-listview'
import ActionBar from 'react-native-action-bar'
import styles from './Styles/InsightScreenStyle'

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
    tabBarIcon: ({ tintColor }) => <Icon name="line-chart" size={20} color={tintColor}/>
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Insights'}
          onLeftPress={() => console.log('Left!')}
        />
        <Timeline
            data={this.data}
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{minWidth:52, marginTop: -5}}
            timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
            descriptionStyle={{color:'gray'}}
            options={{
              style: styles.timeline
            }}
          />
      </View>
    )
  }
}
