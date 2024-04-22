import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { SegmentedControl } from '@/components/SegmentedControl';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const options = [
  'Rectangular',
  'Kidney',
  'Traditional',
  'Modern'
]

const featuresList = [
  {
    title: 'Fiberglass Laminate Construction',
    text: ' Sleek Installs offers exclusive color options utilizing this leading edge technology',
    icon: (color: any, size: number) => 
      <Image style={{ width: 36, height: 36 }} source={(require('@/assets/images/diamond1.png'))} />
    // <Ionicons name='diamond' color={color} size={size} /> 
  },
  {
    title: 'Crystite Color Technology',
    text: ' Sleek Installs offers exclusive color options utilizing this leading edge technology',
    icon: (color: any, size: number) => 
      <Image style={{ width: 36, height: 36 }} source={(require('@/assets/images/color1.png'))} />
      // <Ionicons name='color-fill-outline' color={color} size={size} /> 
  },
  {
    title: 'Swim Up Seating',
    text: 'Crystite Classic',
    icon: (color: any, size: number) => <Ionicons name='partly-sunny-outline' color={color} size={size} /> 
  },
  {
    title: 'Multiple Points of Entry and Exit',
    text: 'If you can only access the pool at one corner, then that naturally limits the position that the pool can be in',
    icon: (color: any, size: number) => 
      // <Image style={{ width: 36, height: 36 }} source={(require('@/assets/images/trail1.png'))} />
      <Ionicons name="trail-sign-outline"  color={color} size={size} /> 
  },
  {
    title: 'Wading Area',
    text: 'Wading areas are similar to tanning ledges but offer more water depth',
    icon: (color: any, size: number) => <Ionicons name='walk-outline' color={color} size={size} /> 
  },
  {
    title: 'Slip Resistant Steps',
    text: 'All entry steps are easy on the feet and help ensure safety',
    icon: (color: any, size: number) => <Ionicons name='footsteps-outline' color={color} size={size} /> 
  },
  {
    title: 'Built-In Spa',
    text: 'Melt away built up stress and treat yourself to some well deserved me time',
    icon: (color: any, size: number) => 
      // <Image style={{ width: 46, height: 46 }} source={(require('@/assets/images/star4.png'))} />
      <Ionicons name='sparkles-outline' color={color} size={size} /> 
  },
  {
    title: 'Limited Lifetime Warranty',
    text: 'We also pay rigorous attention to detail throughout the manufacturing and Quality',
    icon: (color: any, size: number) => <Ionicons name='help-buoy-outline' color={color} size={size} /> 
  }
]

const images = [
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/features1.jpg")
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/features2.jpg")
  },
  {
    name: 'Sapphire Blue',
    url: require("@/assets/images/fiber.jpg")
  },
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/jamaica_r.jpg")
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/axiom_r.jpg")
  }
]


const FiberglassFeatures = () => {
  return (
    <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, borderWidth: StyleSheet.hairlineWidth, borderColor: '#aaa' }}>
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 10,
            paddingBottom: 30
          }}
        >
          {images.map((shape, index) => (
            <View style={styles.scrollContainer} key={index}>
              <Image style={styles.scrollImg} resizeMode='cover' source={shape.url} />
            </View> 
          ))}
        </ScrollView>
        {featuresList.map((feature, index) => (
          <View key={index}>
            <View style={styles.featuresContainer}>
              {feature.icon('#444', 36)}
              <View style={styles.featuresDetails}>
                <Text style={styles.featuresHeader}>{feature.title}</Text>
                <Text style={styles.featuresText}>{feature.text}</Text>
              </View>
            </View>

            {(index === 0 || index === 1) && <View style={styles.separatorLine} />}
          </View>
        ))}
    </View>
  );
}

export default FiberglassFeatures;


const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	},
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  featuresIcon: {

  },
  featuresDetails: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 25,
  },
  featuresHeader: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'ral-b',
    paddingBottom: 5
  },
  featuresText: {
    color: Colors.light.gray,
    fontSize: 14,
    fontFamily: 'ral'
  },  
  separatorLine: {
    flex: 1,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 16
  },
  scrollContainer: {
    width: 250,
    // height: 150,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 2
  },
  scrollImg: {
    width: 250,
    height: 175,
  },
})