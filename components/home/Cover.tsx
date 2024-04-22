import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TABS_HEIGHT } from '@/constants/constants';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { SegmentedControl } from '@/components/SegmentedControl';
import Animated, { interpolate, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useScrollViewOffset, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';
import ILinerPatterns from './ILinerPatterns';

const ledLightList = [
    {
        title: 'Winter Safety Pool Covers Protect Your Family and Your Investment',
        category: 'Overview',
        desc: 'Solid & mesh pool covers are designed to protect your pool for safety and lower your maintenance costs throughout the winter. Latham pool covers are made from a patented design to deliver winter safety covers that are strong, easy to install, and durable. Besides protecting your loved ones, our pool safety covers keep debris out of your pool and block sunlight so you can save money on pool chemicals and extend the life of your pool by keeping unwanted materials out.',
        images: [
            require("@/assets/images/cover/cover1.jpg"),
            require("@/assets/images/cover/cover1.jpg")
        ]
    },
    {
        title: 'Pool Covers for Winter Are Perfect for Any Pool System',
        category: 'Introduction',
        desc: 'When temperatures start to drop, it’s important to take the proper precautions to protect your pool from the effects of winter weather, like water freezing in places where it shouldn’t be. From keeping family members safe, catching falling leaves and debris to keeping your pool in good condition during the offseason, solid and mesh winter covers reduce maintenance time and costs and make it easier to open your pool in the spring.',
        images: [
            require("@/assets/images/cover/cover1.jpg"),
            require("@/assets/images/cover/cover1.jpg"),
        ]
    },
    {
        title: 'Mesh Winter Pool Covers',
        category: 'Introduction',
        desc: 'Mesh safety covers are a popular choice for homeowners – and with good reason. Mesh safety covers are reliable, safe and highly durable. Latham safety covers are constructed with interlocked and double overlapped seams to improve weight transfer from the cover materials to the seams and webbing.',
        images: [
            require("@/assets/images/cover/cover1.jpg"),
            require("@/assets/images/cover/cover1.jpg"),
        ]
    },
    {
        title: 'Solid Winter Pool Safety Covers',
        category: 'Introduction',
        desc: 'Solid pool covers are also a simple yet useful choice for homeowners. As the name suggests, solid pool covers are composed of solid sheets of material, typically reinforced vinyl, to protect your pool and your loved ones.',
        images: [
            require("@/assets/images/cover/hero.jpg"),
            require("@/assets/images/cover/cover1.jpg"),
        ]
    },
    {
        title: 'Mesh Winter Pool Covers',
        category: 'Introduction',
        desc: 'Mesh safety covers are a popular choice for homeowners – and with good reason. Mesh safety covers are reliable, safe and highly durable. Latham safety covers are constructed with interlocked and double overlapped seams to improve weight transfer from the cover materials to the seams and webbing.',
        images: [
            require("@/assets/images/cover/cover1.jpg"),
            require("@/assets/images/cover/cover1.jpg"),
        ]
    }
]

const IMG_HEIGHT = 500;



const Cover = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Shapes');
  
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  useEffect(() => {
    setLoading(false);
  }, [])

  
  const headerAnimatedSytle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value, 
        [0, IMG_HEIGHT / 1.5],
        [0, 1]
      )
    }
  })


  return (
    <Animated.ScrollView 
      ref={scrollRef}
      style={[defaultStyles.container, {backgroundColor:'#efefef'}]}
    >
      <Image 
        style={styles.heroImg} 
        source={require("@/assets/images/cover/hero.jpg")} 
      />
      <View style={styles.heroImgOverlay}>
        <Text style={styles.headerText}>Solid Safety Pool Covers</Text>
      </View>

      {
        ledLightList.map((wall, index) => (
            <>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    gap: 20,
                    // paddingHorizontal: 10,
                    paddingBottom: 30
                }}
            >
                {wall?.images.map((img, index) => (
                    <View style={[styles.scrollViewContainer]} key={index}>
                        <Image style={styles.scrollViewImg} resizeMode='cover' source={img} />
                    </View>
                ))}
            </ScrollView>
            <View style={{ paddingHorizontal: 16, marginBottom: 80 }}>
                    <Text style={{
                        fontFamily: 'mon-sb',
                        fontSize: 24,
                        color: '#444',
                        marginBottom: 5
                    }}>{wall.title}</Text>
                    <Text style={{
                        fontFamily: 'mon-sb',
                        fontSize: 14,
                        color: '#888',
                        textTransform: 'uppercase',
                        marginBottom: 16
                    }}>{wall.category}</Text>
                    <Text style={{
                        fontFamily: 'ral',
                        fontSize: 16,
                        color: '#333',
                        lineHeight: 24,
                    }}>{wall.desc} </Text>
                </View>
            </>
        ))
      }
    

     </Animated.ScrollView>
  );
}

export default Cover;


const styles = StyleSheet.create({
	loading: {
		...StyleSheet.absoluteFillObject,
		zIndex: 10,
		backgroundColor: Colors.light.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heroImg: {
    // flex: 1,
		width: '100%',
		height: 500 - TABS_HEIGHT,
    marginBottom: 30
	},
  heroImgOverlay: {
    // flex: 1,
    position: 'absolute',
		width: '100%',
		height: 500 - TABS_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000033',
    // backgroundColor: Colors.light.primary
  },
	header: {
		paddingVertical: 24,
		height: 100,
		borderBottomColor: Colors.light.gray,
		borderWidth: StyleSheet.hairlineWidth,
		backgroundColor: Colors.light.white,
		// elevation: 4,
		// shadowColor: Colors.light.text,
		// shadowOpacity: .12,
		// shadowRadius: 8,
		// shadowOffset: {
		// 	width: 2,
		// 	height: 2
		// }
	},
  headerText: {
    fontFamily: 'mon-b',
    fontSize: 44,
    color: Colors.light.white,
    paddingHorizontal: 24,
    maxWidth: 400,
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'mon-sb',
    fontSize: 16,
    paddingHorizontal: 24,
    color: Colors.light.gray,
    paddingBottom: 10
  },
  scrollImg: {
    width: 275,
    height: 200,
    borderRadius: 2
  },
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	},
  separatorLine: {
    flex: 1,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 40,
    marginHorizontal: 16
  },
  scrollViewContainer: {
    width: 375,
    // height: 150,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 2
  },
  scrollViewImg: {
    width: 375,
    height: 255,
  },
})