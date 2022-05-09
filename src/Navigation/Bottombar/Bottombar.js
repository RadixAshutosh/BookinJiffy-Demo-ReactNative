import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './Chat'
import Profile from './Profile'
import Notification from './Notification'
import Album from './Album'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons"

const Tab = createMaterialBottomTabNavigator();

const Bottombar = () => {
  return (
      <Tab.Navigator shifting={true}>
          <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <IconContainer name="person" />, tabBarColor: "darkorange" }}   />
          <Tab.Screen name="Chat" component={Chat} options={{ tabBarIcon: () => <IconContainer name="chat-bubble" />, tabBarColor: "red"}}/>
          <Tab.Screen name="Notification" component={Notification} options={{ tabBarIcon: () => <IconContainer name="notifications" />, tabBarColor: "purple"}}/>
          <Tab.Screen name="Album" component={Album} options={{ tabBarIcon: () => <IconContainer name="wysiwyg" />, tabBarColor: "green" }}/>
      </Tab.Navigator>
  )
}

const IconContainer = props =>{
    return <Icon name={props.name} size={25} color={"white"}/>
}

export default Bottombar