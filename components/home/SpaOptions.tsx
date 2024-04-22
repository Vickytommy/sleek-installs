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
    name: 'Meridian',
    url: require("@/assets/images/spa/meridian.jpg"),
    specs: `12 x 38 Model`,
    mainCategory: 'Vinyl pool',
    filterCategory: 'Rectangle',
    description: 'Ahh the rectangle. It’s a true classic shape presenting beauty and class but yet, so simple. Some say the rectangle is the perfect shape for designing any backyard masterpiece. Always autocover friendly and ready for any step, bench or tanning ledge configuration of your dreams. It’s a great day when the backyard swimming pool is the fun place to be',
    features: [],
    options: []
  },
  {
    id: 1,
    name: 'Meridian Spillover',
    url: require("@/assets/images/spa/meridian_spillover.jpg"),
    specs: ` 7′ – 9″ x 7″ – 9″`,
    mainCategory: 'Pool Option',
    filterCategory: '',
    description: 'The Celebrity blends the functionality of a traditional lap pool, with the sleek styling of a freeform.It’s a great day when the backyard swimming pool is the fun place to be',
    
  },
  {
    id: 2,
    name: 'Mystic',
    url: require("@/assets/images/spa/mystic.jpg"),
    specs: `9′ – 8″ x 9′ – 8`,
    mainCategory: 'Pool Option',
    filterCategory: '',
    description: 'A modern take on the classic kidney pool. It’s a great day when the backyard swimming pool is the fun place to be'    
  },
  {
    id: 3,
    name: 'Regal',
    url: require("@/assets/images/spa/regal.jpg"),
    specs: `7′ – 8″ x 9′ – 8″`,
    mainCategory: 'Pool Option',
    filterCategory: '',
    description: '',    
  },
  {
    id: 4,
    name: 'Shasta Spillover',
    url: require("@/assets/images/spa/shasta_spillover.jpg"),
    specs: `6′ – 11″ x 7′ – 9″`,
    mainCategory: 'Pool Option',
    filterCategory: '',
    description: 'A Full-L design is ideal for any yard with plenty of space to swim and countless options for a step or bench. Perfect for parties, it’s a great day when the backyard swimming pool is the fun place to be',
  },
  {
    id: 5,
    name: 'Royal',
    url: require("@/assets/images/spa/royal.jpg"),
    specs: `7′ – 8″ x 9′ – 8″`,
    mainCategory: 'Pool Option',
    filterCategory: '',
    description: 'The Grecian emanates beauty and strength incorporating perfectly crafted angles and its signature corner design. It’s a great day when the backyard swimming pool is the fun place to be',
  }
]

const spasList = [
    {
        title: 'Inground Pool Spas',
        category: 'FIBERGLASS AND VINYL LINER POOL OPTION',
        desc: 'Latham is proud to have created tens of thousands of stunning fiberglass and vinyl liner inground pools with spas for clients all over North America. For over 60 years, we have delivered expert knowledge, top-quality swimming pool products, and excellent customer service. We have received ICC-ES Certification (ICC-ES products are a building inspector’s top choice for long-lasting and high-quality manufactured goods) for our products.',
        images: [
            require("@/assets/images/spa/spa1.jpg"),
            require("@/assets/images/spa/spa2.jpg")
        ]
    },
    {
        title: 'Spillover Spas for Inground Pools',
        category: 'FIBERGLASS AND VINYL LINER POOL OPTION',
        desc: 'Vinyl over polymer steps are typically built into the inside perimeter of the pool, as opposed to being attached on the outside only. This provides a higher degree of quality and stability. Advantages of vinyl over polymer stairs include',
        images: [
            require("@/assets/images/spa/spa3.jpg"),
            require("@/assets/images/spa/spa4.jpg")
        ]
    },
    {
        title: 'Things to Consider',
        category: 'Overview',
        desc: 'We offer fiberglass and vinyl liner pools and spas for a variety of backyard sizes. What is your budget for your pool? While you can install a combination fiberglass pool with a spa for a reasonable cost, you may want to allocate money for accessories like water features and LED inground pool lights that will transform your pool into a beautiful, personalized extension of your home. What style fits your outdoor aesthetic? Latham Pool Products has a generous selection of pools and spillover spas in different shapes and sizes that can be customized with gorgeous tile and pool mosaics. Our experts will help you determine the optimal size and shape for your pool spa while working within the constraints of your budget.',
        images: [
            require("@/assets/images/spa/spa5.jpg"),
            require("@/assets/images/spa/spa6.jpeg")
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


const SpaOptions = (Props: any) => {
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
        spasList.map((wall, index) => (
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
            <TouchableOpacity style={defaultStyles.btn} onPress={handleCloseSheet}>
                <Text style={defaultStyles.btnText}>Speak to a Builder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SleekButtomSheet>
    </View>
  );
}


export default SpaOptions;


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