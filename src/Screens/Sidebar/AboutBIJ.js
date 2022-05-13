import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AboutBIJ = () => {
  return (
    <View style={styles.body}>
      <Text>AboutBIJ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
       flex: 1,
       justifyContent: "center",
       alignItems:"center"

  }
})

export default AboutBIJ