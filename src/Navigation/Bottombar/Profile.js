import React from 'react'
import { View, Text, StyleSheet, Image , ScrollView} from 'react-native'

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.profile} source={{ uri: 'https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/03/8-3.jpg' }} />
        <View>
          <Text style={styles.author}>Ashutosh Wagh</Text>
          <Text style={styles.date}>11/09/1997</Text>
        </View>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum  consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
      <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={styles.textStyle}>Lorem ipsum Morbi accumsan lectus orci consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    color: '#4e4c4e',
    lineHeight: 27,
    marginTop: 20,
    fontWeight: 'bold'
  },
  imageStyle: {
    height: 200,
    marginTop: 30
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 60
  },
  author: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 15,
    color: 'gray',
    marginLeft: 20,
    marginTop: 5
  },
  title: {
    fontSize: 42,
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold'
  }
})

export default Profile