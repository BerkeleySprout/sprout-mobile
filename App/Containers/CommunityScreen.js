import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionBar from 'react-native-action-bar'
import { SearchBar, List, ListItem, ButtonGroup } from 'react-native-elements'
import styles from './Styles/CommunityScreenStyle'
import firebase from 'react-native-firebase';

class CommunityScreen extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
      users: [],
      groups: [],
      refreshing: false,
      error: null
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  getUsers() {
    var database = firebase.database();
    database.ref("users/").once("value", snapshot => {
      var userSnapshot = snapshot.val()
      var tempUsers = [];
      for (user in userSnapshot) {
        tempUsers.push(userSnapshot[user])
        this.setState({
          users: tempUsers
        })
      }
      this.forceUpdate()
    })
  }

  static navigationOptions = {
    tabBarLabel: "Community",
    tabBarIcon: ({ tintColor }) => <Icon name="users" size={20} color={tintColor}/>
  }

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {

    this.getUsers()

    const buttons = ['People', 'Groups']
    const { selectedIndex } = this.state

    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          title={'Community'}
          titleStyle={styles.barText}
          titleContainerStyle={styles.barTextContainer}
        />
        <SearchBar
          round
          lightTheme
          containerStyle={styles.searchBar}
          placeholder='Search for friends...' />
        <ButtonGroup
          buttons={buttons}
          onPress={this.updateIndex.bind(this)}
          selectedIndex={selectedIndex}
          containerStyle={styles.buttonGroup}
          buttonStyle={styles.button}
          selectedButtonStyle={styles.selectedButton}
        />
        <ScrollView>
        <List>
          {
            this.state.users.map((l, i) => (
              <TouchableOpacity
                key={i}>
                <ListItem
                  roundAvatar
                  avatar={{uri:l.image}}
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
