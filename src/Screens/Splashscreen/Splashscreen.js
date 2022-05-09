import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import jiffy from "../../../assets/images/jiffylogo.jpg"

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar  />
      <View></View>
      <View style={styles.logoContainer}>
        <Image source={jiffy} style={styles.logo} />
    </View>
    <View>
        <Text style={styles.text}>Made with ❤ Tech-Radix Pvt. Ltd.</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",

  },
  logo: {
    maxWidth: 200,
    maxHeight: 200,
  },
  logoContainer: {
  alignItems: "center",

  },
  text: {
    color: "black",


  }
})

export default Splashscreen