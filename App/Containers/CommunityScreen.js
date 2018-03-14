import React from 'react'
import { View, SectionList, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionBar from 'react-native-action-bar'
import { Header, SearchBar, List, ListItem, ButtonGroup } from 'react-native-elements'
import styles from './Styles/CommunityScreenStyle'

class CommunityScreen extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  static navigationOptions = {
    tabBarLabel: "Community",
    tabBarIcon: ({ tintColor }) => <Icon name="users" size={20} color={tintColor}/>
  }

  state = {
    data: [
      {
        key: 'First',
        data: [
          {title: 'First Title', description: 'First Description'},
          {title: 'Second Title', description: 'Second Description'},
          {title: 'Third Title', description: 'Third Description'},
          {title: 'Fourth Title', description: 'Fourth Description'},
          {title: 'Fifth Title', description: 'Fifth Description'},
          {title: 'Sixth Title', description: 'Sixth Description'},
          {title: 'Seventh Title', description: 'Seventh Description'},
          {title: 'Eighth Title', description: 'Eighth Description'},
          {title: 'Ninth Title', description: 'Ninth Description'},
          {title: 'Tenth Title', description: 'Tenth Description'}
        ]
      }, {
        key: 'Second',
        data: [
          {title: 'Eleventh Title', description: 'Eleventh Description'},
          {title: '12th Title', description: '12th Description'},
          {title: '13th Title', description: '13th Description'},
          {title: '14th Title', description: '14th Description'},
          {title: '15th Title', description: '15th Description'},
          {title: '16th Title', description: '16th Description'},
          {title: '17th Title', description: '17th Description'},
          {title: '18th Title', description: '18th Description'},
          {title: '19th Title', description: '19th Description'},
          {title: '20th Title', description: '20th Description'},
          {title: 'BLACKJACK!', description: 'BLACKJACK! Description'}
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
      case 'First':
        return <View><Text style={styles.boldLabel}>First Section</Text></View>
      default:
        return <View><Text style={styles.boldLabel}>Second Section</Text></View>
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
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Header - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index



  _handleResults(results) {
    this.setState({ results });
  }

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
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]

    const buttons = ['People', 'Groups']
    const { selectedIndex } = this.state

    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Your Wellness Community'}
          onLeftPress={() => console.log('Left!')}
          rightIcons={[
              {
                  name: 'plus',
                  onPress: () => console.log('Right Plus !'),
              },
          ]}
        />
        <ButtonGroup
          buttons={buttons}
          onPress={this.updateIndex.bind(this)}
          selectedIndex={selectedIndex}
          containerStyle={styles.buttonGroup}
          buttonStyle={styles.button}
          selectedButtonStyle={styles.selectedButton}
        />
        <SearchBar
          lightTheme
          containerStyle={styles.searchBar}
          placeholder='Search for people...' />
        <ScrollView>
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <TouchableOpacity>
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                />
              </TouchableOpacity>
            ))
          }
        </List>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommunityScreen)
