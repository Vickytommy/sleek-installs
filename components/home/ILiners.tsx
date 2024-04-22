import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TABS_HEIGHT } from '@/constants/constants';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { SegmentedControl } from '@/components/SegmentedControl';
import Animated, { interpolate, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useScrollViewOffset, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';
import ILinerPatterns from './ILinerPatterns';


const { width, height } = Dimensions.get('window');

const options = [
  'Shapes',
  'Colors',
  'Features',
  'Options'
]


const IMG_HEIGHT = 500;



const ILiners = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Shapes');
  
  // const scrollX = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  // const onScrollHandler = useAnimatedScrollHandler((event) => {
  //   scrollX.value = event.contentOffset.x;
  // });

  useEffect(() => {
    setLoading(false);
  }, [selectedOption])

  
  const headerAnimatedSytle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value, 
        [0, IMG_HEIGHT / 1.5],
        [0, 1]
      )
    }
  })


  const renderItem: ListRenderItem<any> = ({ item }) => {
    console.log('item ', item)
    switch (selectedOption) {
      case 'Shapes':
        return item[selectedOption];
      case 'Colors':
        return item[selectedOption];
      case 'Options':
        return item[selectedOption];
      case 'Features':
        return item[selectedOption];
      default:
        return item['Shapes'];
    }
  };

  return (
    <Animated.ScrollView 
      ref={scrollRef}
      style={[defaultStyles.container, {backgroundColor:'#efefef'}]}
    >
      <Image 
        style={styles.heroImg} 
        source={require("@/assets/images/iliners/carnegie.jpg")} 
      />
      <View style={styles.heroImgOverlay}>
        <Text style={styles.headerText}>Inground Pools Liners</Text>
      </View>

      {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -60, marginBottom: 30, paddingHorizontal: 20 }}>
        <SegmentedControl 
          options={options} 
          selectedOption={selectedOption} 
          onOptionPress={setSelectedOption}
        />
      </View> */}

      <ILinerPatterns />
    

     </Animated.ScrollView>
  );
}

export default ILiners;


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