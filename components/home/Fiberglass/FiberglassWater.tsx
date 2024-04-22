import Colors from '@/constants/Colors';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ListRenderItem } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link, useNavigation, useRouter } from 'expo-router';
// import { ShapeListings } from '@/constants/Types';
import SleekButtomSheet from '@/components/SleekBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { defaultStyles } from '@/constants/Styles';


interface ShapeListings {
  id: string,
  name: string,
  url: any,
  specs: string,
  filterCategory: string,
  description: string,
  features: string[],
  options: string[]
}

const waterList = [
    {
        title: 'Soothing and Playful Pool Bubblers',
        category: 'WATER FEATURES',
        desc: 'The soothing sound from the water gently rising and falling from a bubbler fountain will melt your tension away as you sink into the pool’s cool depths.Pool bubblers are easy to install and affordable as they don’t require as much water to operate as other water features. A pool bubbler can be used for visual accents as well as to create a spillover spa. Bubblers are also a fun place for kids to play and splash. Some pool owners even like adding multiple bubbler fountains on a large step to create a splash-pad like experience.',
        images: [
            require("@/assets/images/fiberglass/water1.jpg"),
            require("@/assets/images/fiberglass/water2.jpg"),
            require("@/assets/images/fiberglass/water3.jpg")
        ]
    },
    {
        title: 'Pool Waterfalls',
        category: 'WATER FEATURES',
        desc: 'Peerless in their elegance, fiberglass swimming pool waterfalls will complement any pool style. Enliven your pool with a sleek and contemporary waterfall with a streamlined water flow or opt for a nature-inspired waterfall, where a frothy cascade inspires an attractive outdoorsy appeal.',
        images: [
            require("@/assets/images/fiberglass/water5.jpg"),
            require("@/assets/images/fiberglass/water6.jpg")
        ]
    },
    {
        title: 'Pool Fountains',
        category: ' WATER FEATURES',
        desc: 'Pool fountains for fiberglass pools are available in a variety of shapes, sizes, and placement options. Your choice will depend on your desired aesthetic, your budget, and the size of your pool, among other considerations. A spillover fountain, which allows water to flow from a higher to a lower location, will create a tranquil atmosphere.',
        images: [
            require("@/assets/images/fiberglass/water7.jpg"),
            require("@/assets/images/fiberglass/water4.jpg")
        ]
    }
]


const FiberglassWater = (Props: any) => {
  const [selectedOption, setSelectedOption] = useState('Celebrity');
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedItemId, setSelectedItemId] = useState(0);

  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenSheet = (id: number) => {
    setSelectedItemId(id);
    bottomSheetModalRef.current?.present();
  }
  
  const handleConnectToBuilder = () => {
    router.push('/(tabs)/account');
  }

  const handleCloseSheet = () => {
    bottomSheetModalRef.current?.dismiss();
    handleConnectToBuilder();
  }
  
  const renderRow: ListRenderItem<any> = ({ item, index }) => (
		<View>
        <View
          style={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <TouchableOpacity onPress={() => handleOpenSheet(index)} style={styles.scrollContainer} key={item.id}>
            <Image style={styles.scrollImg} resizeMode='cover' source={item.url} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableOpacity> 
        </View> 
      {/* </Link> */}
		</View>
	)


  return (
    <View style={{ marginBottom: 0}}>
      <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
        {/* <SegmentedControl 
          options={options} 
          selectedOption={selectedOption} 
          onOptionPress={setSelectedOption}
        /> */}
      </View>

        {
        waterList.map((wall, index) => (
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
      
    </View>
  );
}


export default FiberglassWater;


const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  secondaryText: {
    fontFamily: 'mon-sb',
    fontSize: 16,
    paddingHorizontal: 24,
    color: Colors.light.gray,
    paddingBottom: 10
  },
  scrollContainer: {
    width: width - 32,
    overflow: 'hidden',
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  scrollImg: {
    width: width - 16,
    height: 250,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'mon-sb',
    fontSize: 18,
    color: Colors.light.white,
    // borderTopRightRadius: 15,
    paddingTop: 5,
    textAlign: 'center'
  },
  details: {
    backgroundColor: '#999',
    paddingBottom: 10,
    paddingHorizontal: 20,
    // marginTop: -10,
  },
  desc: {
    fontFamily: 'ral',
    fontSize: 16,
    color: Colors.light.white,
    
  },
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	},
  modalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingVertical: 32,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20

  },
  contentContainer: {
    // backgroundColor: 'black',
    flex: 1,
    // height: 200,
    // borderWidth: 2,
    // borderColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  modalImg: {
    width: width - 32,
    height: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#efefef',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  modalTitle: {
    fontFamily: 'mon-sb',
    fontSize: 28,
    color: Colors.light.btnSecondaryBg,
    marginBottom: 10
  },
  modalMainCat: {
    textTransform: 'uppercase',
    color: '#888',
    fontFamily: 'qs-b',
    fontSize: 16,
    marginBottom: 10
  },
  modalFilterCat: {
    textTransform: 'uppercase',
    fontFamily: 'mon-sb',
    borderRadius: 8,
    backgroundColor: '#00000033',
    paddingHorizontal: 16,
    paddingVertical: 4,
    color: '#333'
  },
  modalDesc: {
    color: '#888',
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 40,
    textAlign: 'center'
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