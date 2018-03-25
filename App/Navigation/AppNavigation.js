import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import AuthLoadingScreen from '../Containers/AuthLoadingScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
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
      labelStyle: styles.tabLabel,
      showLabel: false,
    }, 
  }
);

MainScreenNavigator.navigationOptions = {
  title: "Tabs"
}

var AuthStack = StackNavigator({
  LoginScreen: { 
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    } 
  },
  SignupScreen: { 
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup"
    }  
  },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignupScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

var AppStack = StackNavigator({
  LoginScreen: { 
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    } 
  },
  SignupScreen: { 
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup"
    }  
  },
  Tabs: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: "Tabs"
    }  
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default AppStack
