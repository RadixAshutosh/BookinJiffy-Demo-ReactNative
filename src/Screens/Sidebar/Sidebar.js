import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Setting from './Setting';

const Drawer = createDrawerNavigator();

const Sidebar = () => {

  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="About" component={About} />
         <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
  )
}

export default Sidebar