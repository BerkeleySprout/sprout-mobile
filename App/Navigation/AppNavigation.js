import { StackNavigator, TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import TreeScreen from '../Containers/TreeScreen'
import ActivitiesScreen from '../Containers/ActivitiesScreen'
import InsightScreen from '../Containers/InsightScreen'
import CommunityScreen from '../Containers/CommunityScreen'
import { ApplicationStyles, Metrics, Colors } from '../Themes'
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
      activeTintColor: Colors.nephritis,
      tabBarHideShadow: true,
      tabBarTextFontFamily: 'Avenir-Black',
    }, 
  }
);

MainScreenNavigator.navigationOptions = {
  title: "Tabs"
}

const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  Tabs: { screen: MainScreenNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
