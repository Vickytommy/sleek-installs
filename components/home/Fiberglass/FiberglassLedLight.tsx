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

const ledLightList = [
    {
        title: 'How Long Should an LED Pool Light Last?',
        category: 'FIBERGLASS SWIMMING POOL OPTION: LED LIGHTS',
        desc: 'Swimming pool LED lights typically last anywhere from 50,000 to 100,000 hours, a significant increase over traditional incandescent bulbs, which last between 1,000 and 2,000 hours and require frequent replacement. LED pool lighting will also deliver substantial savings when it comes to electricity costs. Unlike incandescent lighting, which wastes up 80% of the electricity needed to power, LED pool lights provide a brighter glow without the lost electricity.',
        images: [
            require("@/assets/images/fiberglass/led1.jpg"),
            require("@/assets/images/fiberglass/led2.jpg")
        ]
    },
    {
        title: 'LED Pool Lighting Options',
        category: 'FIBERGLASS SWIMMING POOL OPTION: LED LIGHTS',
        desc: 'Latham’s collection of swimming pool LED lights encompasses a wide variety of lights, from inground to colored illuminators that can be turned on with a tap on your smartphone. Here are some of the lighting options you can choose from to illuminate your pool',
        images: [
            require("@/assets/images/fiberglass/led3.jpg"),
            require("@/assets/images/fiberglass/led4.jpg"),
            require("@/assets/images/fiberglass/led5.jpg"),
            require("@/assets/images/fiberglass/led6.jpg")
        ]
    }
]


const FiberglassLedLight = (Props: any) => {
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
    router.push('/(tabs)/community');
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
    </View>
  );
}


export default FiberglassLedLight;


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
  }
})