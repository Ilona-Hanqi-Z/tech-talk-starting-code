/* This file contains the main page that will show up 
   when a user logs in. */

   import React from 'react';
   import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
   import { createStackNavigator } from '@react-navigation/stack';
   import Icon from 'react-native-vector-icons/Ionicons';
   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
   
   import HomeScreen from './HomeScreen';
   import MapScreen from './MapScreen';
   import CameraScreen from './CameraScreen';
   import NewsScreen from './NewsScreen';
   import ProfileScreen from './ProfileScreen';
   
   // TODO: home, profile, and gallery will have the title tab
   
   // TODO: bottom tab: home, gallery, camera, assignment, and profile

   
   function MainTabScreen(){
       return (
           <View>nothing right now</View>
       );
   }
   
   export default MainTabScreen;
   