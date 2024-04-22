import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TABS_HEIGHT } from '@/constants/constants';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { SegmentedControl } from '@/components/SegmentedControl';
import FiberglassShapes from './FiberglassShapes';
import FiberglassColors from './FiberglassColors';
import FiberglassFeatures from './FiberglassFeatures';
import FiberglassOptions from './FiberglassOptions';
import Animated, { interpolate, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useScrollViewOffset, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';
import CategoryHeader from '@/components/home/CategoryHeader';
import SpaOptions from '../SpaOptions';
import LedgeOptions from '../LedgeOptions';
import FiberglassWater from './FiberglassWater';
import FiberglassLedLight from './FiberglassLedLight';


const { width, height } = Dimensions.get('window');

const categoryOptions = [
  'Shapes',
  'Colors',
  'Features',
  'Water Features',
  'Led Lights',
  'Tanning Ledges',
  'Spas',
  // 'Recommendations'
]


const IMG_HEIGHT = 500;



const Fiberglass = () => {
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
        return <FiberglassShapes />
      case 'Colors':
        return <FiberglassColors />
      case 'Features':
        return <FiberglassFeatures />
      case 'Water Features':
        return <FiberglassWater />
      case 'Led Lights':
        return <FiberglassLedLight />
      case 'Tanning Ledges':
        return <LedgeOptions />
      case 'Spas':
        return <SpaOptions />
      default:
        return <FiberglassShapes />
    }
  };

  const renderImages = () => {
    switch (category) {
      case 'Shapes':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/features2.jpg")} 
        />
      case 'Colors':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/aruba_r.jpg")} 
        />
      case 'Features':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/laguna_deluxe_r.jpg")} 
        />
      case 'Water Features':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/fiberglass/hero.jpg")} 
        />
      case 'Led Lights':
        return <Image 
          style={styles.heroImg} 
          source={require("@/assets/images/fiberglass/led_hero.jpg")} 
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
          source={require("@/assets/images/pavel.jpg")} 
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
        <Text style={styles.headerText}>Fiberglass Pools</Text>
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

			{/* <View style={styles.separatorLine} /> */}
     </Animated.ScrollView>
  );
}

export default Fiberglass;


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