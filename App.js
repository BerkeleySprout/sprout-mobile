import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import TreeScreen from "./app/screens/TreeScreen";
import CommunityScreen from "./app/screens/CommunityScreen";

var MainScreenNavigator = TabNavigator({
	Tree: {
		screen: TreeScreen,
	},
	Community: {
		screen: CommunityScreen,
	},
});

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
}

export default MainScreenNavigator;
