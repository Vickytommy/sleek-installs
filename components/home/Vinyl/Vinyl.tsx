import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TABS_HEIGHT } from '@/constants/constants';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { SegmentedControl } from '@/components/SegmentedControl';
import FiberglassFeatures from '../Fiberglass/FiberglassFeatures';
import Animated, { interpolate, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useScrollViewOffset, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';
import VinylShapes from './VinylShapes';
import VinylPatterns from './VinylPatterns';
import CategoryHeader from '../CategoryHeader';
import ILinerPatterns from '../ILinerPatterns';
import VinylWalls from './VinylWalls';
import VinylSteps from './VinylSteps';
import VinylCoping from './VinylCoping';
import SpaOptions from '../SpaOptions';
import LedgeOptions from '../LedgeOptions';


const { width, height } = Dimensions.get('window');

const categoryOptions = [
  'Shapes',
  'Patterns',
  'Walls',
  'Steps',
  'Coping & Decking',
  'Tanning Ledges',
  'Spas',
  // 'Considerations'
]

const IMG_HEIGHT = 500;



const Vinyl = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  
  const [category, setCategory] = useState<string>('Shapes');
  
  const onDataChanged = (category: string) => {
    console.log('changed cate - ', category)
    setCategory(category);
  }

  useEffect(() => {
    setLoading(false);
  }, [category])

  
  const headerAnimatedSytle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value, 
        [0, IMG_HEIGHT / 1.5],
        [0, 1]
      )
    }
  })

  const renderItem = () => {
    switch (category) {
      case 'Shapes':
        return <VinylShapes />
      case 'Patterns':
        return <ILinerPatterns />
      case 'Walls':
        return <VinylWalls />
      case 'Steps':
        return <VinylSteps />
      case 'Coping & Decking':
        return <VinylCoping />
      case 'Tanning Ledges':
        return <LedgeOptions />
      case 'Spas':
        return <SpaOptions />
      default:
        return <VinylShapes />
    }
  };

  const renderImages = () => {
    switch (category) {
      case 'Shapes':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/hero2.jpg")} 
        />
      case 'Patterns':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/gemini1.jpg")} 
        />
      case 'Features':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/full_l1.jpg")} 
        />
      case 'Walls':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/grecian1.jpg")} 
        />
      case 'Steps':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/steps10.jpg")} 
        />
      case 'Coping & Decking':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/coping.jpg")} 
        />
      case 'Tanning Ledges':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/ledges/hero.jpg")} 
        />
      case 'Spas':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/spa/spa.jpeg")} 
        />
      default:
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/vinyl/steps.jpg")} 
        />
    }
  }

  return (
    <Animated.ScrollView 
      ref={scrollRef}
      style={[defaultStyles.container, {backgroundColor:'#efefef'}]}
    >
      {(() =>  renderImages())()}
      <View style={styles.heroImgOverlay}>
        <Text style={styles.headerText}>Vinyl Pools</Text>
      </View>

      <CategoryHeader onCategoryChanged={onDataChanged} categories={categoryOptions} />
      
      <ScrollView style={[defaultStyles.container, { backgroundColor: '#efefef'}]}>
        {
        loading && category ?
          <View style={[StyleSheet.absoluteFill, styles.loading]}>
            <ActivityIndicator size={60} color={Colors.light.primary} />
          </View>
          :
          (() =>  renderItem())()
        }
      </ScrollView>

     
     </Animated.ScrollView>
  );
}

export default Vinyl;


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
    maxWidth: 300,
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
})