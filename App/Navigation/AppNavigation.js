import { StackNavigator, TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TreeScreen from '../Containers/TreeScreen'
import ActivitiesScreen from '../Containers/ActivitiesScreen'
import InsightScreen from '../Containers/InsightScreen'
import CommunityScreen from '../Containers/CommunityScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
var MainScreenNavigator = TabNavigator({
  Tree: {
    screen: TreeScreen,
  },
  Activities: {
    screen: ActivitiesScreen,
  },
  Insight: {
    screen: InsightScreen,
  },
  Community: {
    screen: CommunityScreen,
  },
},
  {
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "green"
    }
  }
);

MainScreenNavigator.navigationOptions = {
  title: "Navigation Tab"
}

const PrimaryNav = StackNavigator({
  ActivitiesScreen: { screen: ActivitiesScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default MainScreenNavigator
