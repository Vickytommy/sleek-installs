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

const options = [
    'Night Life',
    'Blue Horizon'
]

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
const shapeList = [
  {
    id: 0,
    name: 'Blue Slate Streamstone',
    url: require("@/assets/images/oliners/blue_slate.jpg"),
    specs: `Tile Height: 8-1/4"`,
    mainCategory: 'Aboveground Pool Liner',
    // filterCategory: 'Modern Freeform',
    description: 'The Island Wave pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
  },
  {
    id: 1,
    name: 'Boulder Bay Streamstone',
    url: require("@/assets/images/oliners/boulder.jpg"),
    specs: `Tile Height: 8-1/4"`,
    mainCategory: 'Aboveground Pool Liner',
    // filterCategory: 'Modern Freeform',
    description: 'The Bali pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
  },
  {
    id: 2,
    name: 'Concord Mystic Blue',
    url: require("@/assets/images/oliners/concord.jpg"),
    specs: `Tile Height: 8-1/4"`,
    mainCategory: 'Aboveground Pool Liner',
    // filterCategory: 'Modern Freeform',
    description: 'The Island Wave pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
  },
  {
    id: 4,
    name: 'Prism',
    url: require("@/assets/images/oliners/prism.jpg"),
    specs: `Tile Height: 8-1/4"`,
    mainCategory: 'Aboveground Pool Liner',
    // filterCategory: 'Modern Freeform',
    description: 'The Island Wave pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
  },
  {
    id: 5,
    name: 'Brigton Prism',
    url: require("@/assets/images/oliners/brighton_prism.jpg"),
    specs: `Tile Height: 8-1/4"`,
    mainCategory: 'Aboveground Pool Liner',
    // filterCategory: 'Modern Freeform',
    description: 'The Island Wave pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
  },
//   {
//     id: 5,
//     name: 'Saint',
//     url: require("@/assets/images/oliners/saint_paul.jpg"),
//     specs: `Tile Height: 8-1/4"`,
//     mainCategory: 'Aboveground Pool Cover',
//     // filterCategory: 'Modern Freeform',
//     description: 'The Island Wave pattern softens your entry to the water with a tapestry that evokes a sense of unity and strength',
//   }
]

const OLinerPatterns = (Props: any) => {
  const [selectedOption, setSelectedOption] = useState('Night Life');
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedItemId, setSelectedItemId] = useState(0);

  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleConnectToBuilder = () => {
    router.push('/(tabs)/community');
  }
  const handleDirect = () => {
  // navigation.navigate('listing/shapeId', {
    //   shapeId: '2'
    // });
  }

  const handleOpenSheet = (id: number) => {
    setSelectedItemId(id);
    bottomSheetModalRef.current?.present();
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

      <FlatList
        renderItem={renderRow} 
        ref={listRef}
        data={shapeList}
      />
        
      <SleekButtomSheet snap={1} ref={bottomSheetModalRef}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImg} resizeMode='cover' source={shapeList[selectedItemId].url} />
          <View style={styles.contentContainer}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.modalMainCat}>{shapeList[selectedItemId].mainCategory}</Text>
              <Text style={styles.modalTitle}>{shapeList[selectedItemId].name} {shapeList[selectedItemId].specs}</Text>
              {/* <Text style={styles.modalFilterCat}>{shapeList[selectedItemId].filterCategory}</Text> */}
              <Text style={styles.modalDesc}>{shapeList[selectedItemId].description}</Text>
            </View>
            <TouchableOpacity style={defaultStyles.btn} onPress={handleConnectToBuilder}>
                <Text style={defaultStyles.btnText}>Speak to a Builder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SleekButtomSheet>
    </View>
  );
}


export default OLinerPatterns;


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
    marginBottom: 16
  },
  title: {
    fontFamily: 'mon-sb',
    fontSize: 18,
    color: Colors.light.white,
    // borderTopRightRadius: 15,
    paddingTop: 5,
    textAlign: 'center',
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
  }
})