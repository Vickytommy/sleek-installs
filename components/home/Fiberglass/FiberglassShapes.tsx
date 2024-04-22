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
  'Rectangle',
  'Kidney',
  'Traditional',
  'Modern'
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
    name: 'Aruba',
    url: require("@/assets/images/aruba.jpg"),
    specs: `11' x 22' Model`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Modern Freeform',
    description: 'Add a spa into your pool for the best of both worlds, the Astoria lets you create your own experience every time',
    features: [
      'Swim Up Seating', 
      'Multiple Points of Entry and Exists', 
      'Wading Area'
    ],
    options: [
      'Tile',
      'Bubblers',
      'Automatic Vacuums',
      'Cascades',
      'Spillways',
      'Lighting',
      'Tanning Ledge'
    ]
  },
  {
    id: 1,
    name: 'Axiom 14',
    url: require("@/assets/images/axiom.jpg"),
    specs: `14′ x 30′, Depth 4′ 6″ to 6′`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Modern Freeform',
    description: 'The striking focal point of the Axiom 14 is the huge underwater ledge, this pool is perfect for relaxing not only by the side of the pool but also relaxing inside the pool',
    
  },
  {
    id: 2,
    name: 'Synergy',
    url: require("@/assets/images/synergy.jpg"),
    specs: `16′ x 40′ 2″, Depth 3′ 9″ to 6′ 3″`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Modern Freeform',
    description: 'Soak up the sun in the Synergy, its subtle curves provide the perfect balance between the modern feel of a rectangle and the creative spirit of a freeform'    
  },
  {
    id: 3,
    name: 'Key West',
    url: require("@/assets/images/key_west.jpg"),
    specs: `12′ x 25′ 7″, Depth 3′ 7″ to 6′`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Traditional Freeform',
    description: 'The Key West is bursting with style, this classical freeform will be the pool of your dreams',    
  },
  {
    id: 4,
    name: 'Laguna Deluxe',
    url: require("@/assets/images/laguna_deluxe.jpg"),
    specs: `14′ x 30′, Depth 4′ to 6′`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Modern Freeform',
    description: 'Treat yourself to the complete spa/pool package for the ultimate relaxation ata your home. The Laguna Deluxe lets you create your own experience every time',
  },
  {
    id: 5,
    name: 'Jamaica',
    url: require("@/assets/images/jamaica.jpg"),
    specs: `10′ x 20′ Model`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Kidney',
    description: 'A classic and timeless design, the Jamaica provides a private oasis where you will feel relaxed and at peace with the day',
  },
  {
    id: 6,
    name: 'Astoria',
    url: require("@/assets/images/astoria.jpg"),
    specs: `15' 10" x 40' Model`,
    mainCategory: 'Fiberglass pool',
    filterCategory: 'Rectangular',
    description: 'Add a spa into your pool for the best of both worlds, the Astoria lets you create your own experience every time',
  }
]

const FiberglassShapes = (Props: any) => {
  const [selectedOption, setSelectedOption] = useState('Rectangle');
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
    <View style={{ marginTop: 20 }}>
      {/* <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
        <SegmentedControl 
          options={options} 
          selectedOption={selectedOption} 
          onOptionPress={setSelectedOption}
        />
      </View> */}

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
              <Text style={styles.modalFilterCat}>{shapeList[selectedItemId].filterCategory}</Text>
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


export default FiberglassShapes;


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
  }
})