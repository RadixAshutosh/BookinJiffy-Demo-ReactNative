import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LogInScreen from '../../Screens/LogInScreen/LogInScreen';
import Splashscreen from '../../Screens/Splashscreen/Splashscreen';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

   // ***********FOR SPLASH SCREEN************ */

    const [showsplash, setShowsplash] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setShowsplash(false);
      }, 4000);
    },[])

    return (
        //***************FOR SIDEBAR, LOGIN SCREEN AND SPLASH SCREEN **************** */
         <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName='Splashscreen'>
                  {
                    showsplash ? <Stack.Screen
                      name="Splashscreen"
                      component={Splashscreen}
                      options={{ headerShown: false }}

                    />
                    :
                    null
                  }
                  <Stack.Screen
                    name="LogInScreen"
                    component={LogInScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                  />

                </Stack.Navigator>
              </NavigationContainer>
        </SafeAreaProvider> 
    )
}

export default StackNavigator