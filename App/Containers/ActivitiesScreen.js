import React from 'react'
import { View, SectionList, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/ActivitiesScreenStyle'
import activitiesData from '../Fixtures/main.json'
import ActionBar from 'react-native-action-bar'

const awe = activitiesData.filter(x => x.categories.includes('awe'))
const gratitude = activitiesData.filter(x => x.categories.includes('gratitude'))
const kindness = activitiesData.filter(x => x.categories.includes('kindness'))
const mindfulness = activitiesData.filter(x => x.categories.includes('mindfulness'))
const resilience = activitiesData.filter(x => x.categories.includes('resilience_to_stress'))

export default class ActivitiesScreen extends React.PureComponent {

  static navigationOptions = {
    tabBarLabel: "Activities",
    tabBarIcon: ({ tintColor }) => <Icon name="heart" size={20} color={tintColor}/>
  }

  state = {
    data: [
    {
      key: "Awe",
      data: awe
    },
    {
      key: "Gratitude",
      data: gratitude
    },
    {
      key: "Kindness",
      data: kindness
    },
    {
      key: "Mindfulness",
      data: mindfulness
    },
    {
      key: "Resilience",
      data: resilience
    }
    ]
  }

  onPressActivity = () => {
    console.log("Activity Pressed")
    // Transition to new screen with activity - decide if this should be a modal
  }

  renderItem ({section, item}) {
    const gradientHeight = 100
    const gradientBackground = 'black'
    const data = Array.from({ length: gradientHeight })
    return (
      <TouchableOpacity 
      style={styles.row}
      onPress={this.onPressActivity}>
        <ImageBackground
        style={styles.imageBackground}
        resizeMode={'cover'}
        source={{ uri: item.img }}
        >
          {data.map((_, i) => (
            <View
              key={i}
              style={{
                position: 'absolute',
                backgroundColor: gradientBackground,
                height: 1,
                bottom: (gradientHeight - i - 5),
                right: 0,
                left: 0,
                zIndex: 1,
                opacity: (1 / gradientHeight) * (i + 1)
              }}
            />
          ))}
          <Text style={styles.boldLabel}>{item.title}</Text>
          <Text style={styles.label}>{item.description}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  renderSectionHeader ({section}) {
    return <View style={styles.sectionHeaderView}><Text style={styles.sectionHeader}>{section.key}</Text></View> 
  }

  keyExtractor = (item, index) => index

  oneScreensWorth = 20
  
  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Activities'}
          titleStyle={styles.barText}
          titleContainerStyle={styles.barTextContainer}
        />
        <SectionList
          horizontal={false}
          numColumns={2}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.data}
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeadsswwer}
          stickySectionHeadersEnabled={false}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
