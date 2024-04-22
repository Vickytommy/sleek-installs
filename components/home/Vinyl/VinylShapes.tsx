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
  'Celebrity', 
  'Odyssey',
  'Grecian',
  'Liberty'
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
    name: 'Rectangle',
    url: require("@/assets/images/vinyl/rectangle.jpg"),
    specs: `12 x 38 Model`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Rectangle',
    description: 'Ahh the rectangle. It’s a true classic shape presenting beauty and class but yet, so simple. Some say the rectangle is the perfect shape for designing any backyard masterpiece. Always autocover friendly and ready for any step, bench or tanning ledge configuration of your dreams. It’s a great day when the backyard swimming pool is the fun place to be',
    features: [],
    options: []
  },
  {
    id: 1,
    name: 'Celebrity',
    url: require("@/assets/images/vinyl/celebrity.jpg"),
    specs: `14′ x 30′, Depth 4′ 6″ to 6′`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Celebrity',
    description: 'The Celebrity blends the functionality of a traditional lap pool, with the sleek styling of a freeform.It’s a great day when the backyard swimming pool is the fun place to be',
    
  },
  {
    id: 2,
    name: 'Cresent',
    url: require("@/assets/images/vinyl/cresent.jpg"),
    specs: `16′ x 40′ 2″, Depth 3′ 9″ to 6′ 3″`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Cresent',
    description: 'A modern take on the classic kidney pool. It’s a great day when the backyard swimming pool is the fun place to be'    
  },
  {
    id: 3,
    name: 'Dominican',
    url: require("@/assets/images/vinyl/dominican.jpg"),
    specs: `12′ x 25′ 7″, Depth 3′ 7″ to 6′`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Dominican',
    description: '',    
  },
  {
    id: 4,
    name: 'Full L',
    url: require("@/assets/images/vinyl/full_l.jpg"),
    specs: `14′ x 30′, Depth 4′ to 6′`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Full L',
    description: 'A Full-L design is ideal for any yard with plenty of space to swim and countless options for a step or bench. Perfect for parties, it’s a great day when the backyard swimming pool is the fun place to be',
  },
  {
    id: 5,
    name: 'Grecian',
    url: require("@/assets/images/vinyl/grecian.jpg"),
    specs: `10′ x 20′ Model`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Grecian',
    description: 'The Grecian emanates beauty and strength incorporating perfectly crafted angles and its signature corner design. It’s a great day when the backyard swimming pool is the fun place to be',
  },
  {
    id: 6,
    name: 'Gemini',
    url: require("@/assets/images/vinyl/gemini.jpg"),
    specs: `14x28, 16x32, 17x36, & 20x40 Model`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Gemini',
    description: 'Escape to your oasis and let the tides of this popular freeform design ebb and flow through your senses. It’s a great day when the backyard swimming pool is the fun place to be',
  }
]

const VinylShapes = (Props: any) => {
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
            <TouchableOpacity style={defaultStyles.btn} onPress={handleCloseSheet}>
                <Text style={defaultStyles.btnText}>Speak to a Builder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SleekButtomSheet>
    </View>
  );
}


export default VinylShapes;


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