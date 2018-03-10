import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

// Styles
import styles from './Styles/ActivitiesScreenStyle'

export default class ActivitiesScreen extends React.PureComponent {

  static navigationOptions = {
    tabBarLabel: "Activities",
    tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color={tintColor}/>
  }

  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    data: [
      {
        key: 'Awe',
        data: [
          {title: 'First Title', description: 'First Description'},
          {title: 'Second Title', description: 'Second Description'},
          {title: 'Third Title', description: 'Third Description'},
          {title: 'Fourth Title', description: 'Fourth Description'},
          {title: 'Fifth Title', description: 'Fifth Description'},
          {title: 'Sixth Title', description: 'Sixth Description'},
          {title: 'Seventh Title', description: 'Seventh Description'},
          {title: 'Eighth Title', description: 'Eighth Description'},
        ]
      }, {
        key: 'Gratitude',
        data: [
          {title: 'Ninth Title', description: 'Ninth Description'},
          {title: 'Tenth Title', description: 'Tenth Description'},
          {title: 'Eleventh Title', description: 'Eleventh Description'},
          {title: '12th Title', description: '12th Description'},
          {title: '13th Title', description: '13th Description'},
          {title: '14th Title', description: '14th Description'},
          {title: '15th Title', description: '15th Description'},
          {title: '16th Title', description: '16th Description'},
        ]
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
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{item.title}</Text>
        <Text style={styles.label}>{item.description}</Text>
      </View>
    )
  }

  // Conditional branching for section headers, also see step 3
  renderSectionHeader ({section}) {
    switch (section.key) {
      case 'Awe':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Awe Activities</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Gratitude Activities</Text></View>
    }
  }

  /* ***********************************************************
  * STEP 2
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *
  * Removing a function here will make SectionList use default
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> Wellness Activities </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}></Text>

  // Show this when data is empty
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
        <SectionList
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
