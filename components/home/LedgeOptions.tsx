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
const ledgeList = [
  {
    id: 0,
    name: 'Gemini',
    url: require("@/assets/images/ledges/gemini.jpg"),
    specs: `12 x 38 Model`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: ''
  },
  {
    id: 1,
    name: 'Genesis',
    url: require("@/assets/images/ledges/genesis.jpg"),
    specs: ` 7′ – 9″ x 7″ – 9″`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: '',
    
  },
  {
    id: 2,
    name: 'Hermosa',
    url: require("@/assets/images/ledges/hermosa.jpg"),
    specs: `9′ – 8″ x 9′ – 8`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: '',
  },
  {
    id: 3,
    name: 'Large Picasso',
    url: require("@/assets/images/ledges/large_picasso.jpg"),
    specs: `7′ – 8″ x 9′ – 8″`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: '',
    description: '',    
  },
  {
    id: 4,
    name: 'Rectangle',
    url: require("@/assets/images/ledges/rectangle.jpg"),
    specs: `6′ – 11″ x 7′ – 9″`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: '',
  },
  {
    id: 5,
    name: 'Semi circle',
    url: require("@/assets/images/ledges/semicircle.jpg"),
    specs: `7′ – 8″ x 9′ – 8″`,
    mainCategory: 'Tanning Ledges Option',
    filterCategory: '',
  }
]

const ledgesList = [
    {
        title: 'What Is a Swimming Pool Tanning Ledge?',
        category: 'Overview',
        desc: 'Like swimming pools, tanning ledges can be constructed from several different materials.Latham offers two types of tanning ledges, Fiberglass Gel Coated and Vinyl. Every tanning ledge consists of the same basic elements: a shallow, elevated platform that features openings into the main swimming pool. However, there are countless design variations to choose between, from modern to rustic to classical and beyond.',
        images: [
            require("@/assets/images/ledges/ledges1.jpg"),
            require("@/assets/images/ledges/ledges2.jpg"),
            require("@/assets/images/ledges/ledges3.jpg"),
            require("@/assets/images/ledges/ledges4.jpg")
        ]
    },
    {
        title: 'Fiberglass Gel Coated Tanning Ledges',
        category: 'TANNING LEDGE OPTIONS',
        desc: 'Fiberglass has several qualities that make it ideal for tanning ledges. Its smooth texture prevents painful snags or scrapes, while its unique chemical composition ensures high durability. This translates to huge savings over time, since less maintenance and fewer repairs are required.',
        images: [
            require("@/assets/images/ledges/ledges5.jpg"),
            require("@/assets/images/ledges/ledges6.jpg")
        ]
    },
    {
        title: 'Vinyl Liner Pool Tanning Ledges',
        category: 'TANNING LEDGE OPTIONS',
        desc: 'Vinyl is a high-performance alternative to fiberglass, boasting its own unique set of distinctive features. Like their fiberglass counterparts, vinyl swimming pool ledges are also soft to the touch and quick to construct, delivering excellent value for your investment and providing a highly customizable social area.',
        images: [
            require("@/assets/images/ledges/ledges7.jpg"),
            require("@/assets/images/ledges/ledges8.png")
        ]
    },
    {
        title: 'Inground Vinyl Pool Decking Options',
        category: '',
        desc: 'The main purpose of your decking is to provide an aesthetic outer rim to your swimming pool area while functionally moving water away from the back of the pool shell. Many materials provide this solution, so your choice comes down to your desired look for the landscape and budget.',
        images: [
            require("@/assets/images/vinyl/coping6.jpg"),
            require("@/assets/images/vinyl/coping7.jpg"),
            require("@/assets/images/vinyl/coping8.jpg"),
            require("@/assets/images/vinyl/coping9.jpg")
        ]
    }
]


const LedgeOptions = (Props: any) => {
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
        ledgesList.map((wall, index) => (
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
      

      <FlatList
        renderItem={renderRow} 
        ref={listRef}
        data={ledgeList}
      />
        
        
      <SleekButtomSheet snap={1} ref={bottomSheetModalRef}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImg} resizeMode='cover' source={ledgeList[selectedItemId].url} />
          <View style={styles.contentContainer}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.modalMainCat}>{ledgeList[selectedItemId].mainCategory}</Text>
              <Text style={styles.modalTitle}>{ledgeList[selectedItemId].name} {ledgeList[selectedItemId].specs}</Text>
              {/* <Text style={styles.modalFilterCat}>{shapeList[selectedItemId].filterCategory}</Text> */}
              <Text style={styles.modalDesc}>{ledgeList[selectedItemId].description}</Text>
            </View>
            <TouchableOpacity style={defaultStyles.btn} onPress={handleCloseSheet}>
                <Text style={defaultStyles.btnText}>Speak to a Builder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SleekButtomSheet>
    </View>
  );
}


export default LedgeOptions;


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