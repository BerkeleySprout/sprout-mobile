import React from 'react'
import { View, SectionList, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
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

  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
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


  /* ***********************************************************
  * STEP 3
  * `renderItem` function - How each cell should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
  *   return <MyCustomCell title={item.title} description={item.description} />
  *
  * For sections with different cells (heterogeneous lists), you can do branch
  * logic here based on section.key OR at the data level, you can provide
  * `renderItem` functions in each section.
  *
  * Note: You can remove section/separator functions and jam them in here
  *************************************************************/
  renderItem ({section, item}) {
    const gradientHeight = 100
    const gradientBackground = 'black'
    const data = Array.from({ length: gradientHeight })
    return (
      <TouchableOpacity style={styles.row}>
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
                zIndex: 2,
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

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}></Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Activities'}
          titleStyle={styles.barText}
          titleContainerStyle={styles.barTextContainer}
          onLeftPress={() => console.log('Left!')}
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
          ListHeaderComponent={this.renderHeader}
          stickySectionHeadersEnabled={false}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
