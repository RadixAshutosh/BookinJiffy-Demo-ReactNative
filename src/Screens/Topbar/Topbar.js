import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../../Navigation/Bottombar/Chat';
import Notification from '../../Navigation/Bottombar/Notification';
import Status from '../../Navigation/Bottombar/Status';


const Tab = createMaterialTopTabNavigator();

function Topbar() {
    return (
        <Tab.Navigator >
       
            <Tab.Screen name="Chat" component={Chat}  />
            <Tab.Screen name="Notification" component={Notification}  />
            <Tab.Screen name="Status" component={Status}  />
        </Tab.Navigator>
    );
}


export default Topbar;