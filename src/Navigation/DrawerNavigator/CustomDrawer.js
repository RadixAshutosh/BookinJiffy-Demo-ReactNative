import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/Ionicons"

const CustomDrawer = (props) => {
  return (
   <View style={{flex:1}}>
          <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"purple"}}>
              <ImageBackground source={require("../../../assets/images/purple.jpg")} style={{padding:20}}>
                 <Image source={require("../../../assets/images/profile.jpg")} style={{height:70, width:70, borderRadius:40, marginBottom:10}}/>
                 <Text style={{color:"white", fontSize:15}}>Ashutosh Wagh</Text>
              </ImageBackground>
              <View style={{flex:1, backgroundColor:"white", paddingTop:10}}>
              <DrawerItemList {...props}  />
              </View>
          </DrawerContentScrollView>
          {/* <View style={{padding:20, borderTopWidth:1, borderTopColor:"#ccc"}}>
           <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}></TouchableOpacity>
             <View style={{flexDirection:"row", alignItems:"center"}}>
                  <IconContainer name="share-social-outline" size={15}/>
                  <Text>Our Custom Text</Text>
             </View>
          </View> */}

   </View>
   
  )
}

const IconContainer = props => {
    return <Icon name={props.name} size={20} />
}
export default CustomDrawer