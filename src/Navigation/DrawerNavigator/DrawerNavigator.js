import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyAppointments from '../../Screens/Sidebar/MyAppointments';
import Reschedule from '../../Screens/Sidebar/Reschedule';
import MyAvailability from '../../Screens/Sidebar/MyAvailability';
import Settings from '../../Screens/Sidebar/Settings';
import Share from '../../Screens/Sidebar/Share';
import AboutBIJ from '../../Screens/Sidebar/AboutBIJ';
import ContactUs from '../../Screens/Sidebar/ContactUs';
import SuggestToBusiness from '../../Screens/Sidebar/SuggestToBusiness';
import Faq from '../../Screens/Sidebar/Faq';
import Logout from '../../Screens/Sidebar/Logout';
import Bottombar from '../Bottombar/Bottombar';
import CustomDrawer from './CustomDrawer';
import Icon from "react-native-vector-icons/Ionicons"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{drawerInactiveTintColor:"#333" ,drawerActiveTintColor:"white", drawerActiveBackgroundColor:"darkorange",drawerLabelStyle:{marginLeft:-25}}}>
            <Drawer.Screen name="Home" component={Bottombar} options={{ drawerIcon: () => <IconContainer name="home-outline" /> }}/>
            <Drawer.Screen name="MyAppointments" component={MyAppointments} options={{ drawerIcon: () => <IconContainer name="grid-outline" /> }}/>
            <Drawer.Screen name="Reschedule" component={Reschedule} options={{ drawerIcon: () => <IconContainer name="pencil" /> }}/>
            <Drawer.Screen name="MyAvailability" component={MyAvailability} options={{ drawerIcon: () => <IconContainer name="person-outline" /> }}/>
            <Drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: () => <IconContainer name="settings-outline" /> }} />
            <Drawer.Screen name="Share" component={Share} options={{ drawerIcon: () => <IconContainer name="share-social-outline" /> }} />
            <Drawer.Screen name="AboutBIJ" component={AboutBIJ} options={{ drawerIcon: () => <IconContainer name="information-outline" /> }} />
            <Drawer.Screen name="ContactUs" component={ContactUs} options={{ drawerIcon: () => <IconContainer name="call-outline" /> }} />
            <Drawer.Screen name="SuggestToBusiness" component={SuggestToBusiness} options={{ drawerIcon: () => <IconContainer name="ios-briefcase-outline" /> }} />
            <Drawer.Screen name="FAQ" component={Faq} options={{ drawerIcon: () => <IconContainer name="ios-warning-outline" /> }} />
            <Drawer.Screen name="Logout" component={Logout} options={{ drawerIcon: () => <IconContainer name="log-out-outline" /> }} />

           
        </Drawer.Navigator>
    )
}

const IconContainer = props => {
    return <Icon name={props.name} size={20} />
}

export default DrawerNavigator