import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ScrollView } from 'react-native';

const options = [
  'Rectangular',
  'Kidney',
  'Traditional',
  'Modern'
]

const colorList = [
  {
    name: 'Sapphire Blue',
    url: require("@/assets/images/sapphire_blue.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/ocean_blue.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/night_sky.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Shale Grey',
    url: require("@/assets/images/shale_grey.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Coastal Bronze',
    url: require("@/assets/images/coastal_bronze.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Pearl White',
    url: require("@/assets/images/pearl_white.jpg"),
    specs: 'Crystite Classic'
  }
]

const colorList_c = [
  {
    name: 'Sapphire Blue',
    url: require("@/assets/images/sapphire_blue_c.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/ocean_blue_c.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/night_sky_c.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Shale Grey',
    url: require("@/assets/images/shale_grey_c.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Coastal Bronze',
    url: require("@/assets/images/coastal_bronze_c.jpg"),
    specs: 'Crystite Classic'
  },
  {
    name: 'Whisper White',
    url: require("@/assets/images/whisper_white.jpg"),
    specs: 'Crystite Classic'
  }
]

const images = [
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/sap.jpg")
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/oce.jpg")
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/nig.jpg")
  },
  {
    name: 'Sapphire Blue',
    url: require("@/assets/images/sha.jpg")
  },
  {
    name: 'Night Sky',
    url: require("@/assets/images/coa.jpg")
  },
  {
    name: 'Ocean Blue',
    url: require("@/assets/images/pea.jpg")
  }
]

const VinylPatterns = () => {

  return (
    <View style={{ paddingTop: 20, paddingBottom: 0, borderWidth: StyleSheet.hairlineWidth, borderColor: '#aaa' }}>
      <ScrollView>
         {/* <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
          <SegmentedControl 
            options={options} 
            selectedOption={selectedOption} 
            onOptionPress={setSelectedOption}
          />
        </View> */}<ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 10,
            paddingBottom: 60,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#444'
          }}
        >
          {images.map((image, index) => (
            <View style={styles.colorContainer} key={index}>
              <Image style={styles.colorImg} resizeMode='cover' source={image.url} />
            </View> 
          ))}
        </ScrollView>

          
        <Text style={{ 
          fontFamily: 'ral-b', 
          textTransform: 'uppercase',
          paddingHorizontal: 24,
          paddingBottom: 15,
          fontSize: 14,
          color: '#777',
          letterSpacing: 1
        }}>Crystite Crystal Collection</Text>

        <View
          // horizontal
          // showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
            paddingHorizontal: 16,
            paddingBottom: 60,
          }}
        >
        {colorList.map((shape, index) => (
          
          <View style={styles.scrollContainer} key={index}>
            <Image style={styles.scrollImg} resizeMode='cover' source={shape.url} />
            <View style={styles.details}>
              <Text style={styles.title}>{shape.name}</Text>
              {/* <Text style={styles.desc} numberOfLines={1} ellipsizeMode='tail'>{shape.specs.toUpperCase()}</Text> */}
            </View>
          </View> 
        ))}
        </View> 

        <Text style={{ 
          fontFamily: 'ral-b', 
          textTransform: 'uppercase',
          paddingHorizontal: 24,
          paddingBottom: 15,
          fontSize: 14,
          color: '#777',
          letterSpacing: 1
        }}>Crystite Classic Collection</Text>
        
        
        <View
          // horizontal
          // showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
            paddingHorizontal: 16,
            paddingBottom: 60,
          }}
        >
          {colorList_c.map((shape, index) => (
            <View style={[styles.scrollContainer, {  }]} key={index}>
              <Image style={styles.scrollImg} resizeMode='cover' source={shape.url} />
              <View style={styles.details}>
                <Text style={styles.title}>{shape.name}</Text>
                {/* <Text style={styles.desc} numberOfLines={1} ellipsizeMode='tail'>{shape.specs.toUpperCase()}</Text> */}
              </View>
            </View> 
          ))}
        </View> 
      </ScrollView>
    </View>
  );
}

export default VinylPatterns;


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
    // width: 108,
    width: '31.4%',
    // height: 150,
    overflow: 'hidden',
    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.light.background,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#065c96',
    padding: 2,
  },
  scrollImg: {
    width: '100%',
    height: 100,
  },
  title: {
    fontFamily: 'mon-sb',
    fontSize: 12,
    color: Colors.light.gray,
    textTransform: 'uppercase',
    paddingTop: 5
  },
  details: {
    padding: 10,
    marginTop: -10,
    minHeight: 60
  },
  desc: {
    fontFamily: 'ral',
    fontSize: 12,
    color: Colors.light.gray,
    
  },
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	},
  colorContainer: {
    width: 350,
    // height: 150,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 2
  },
  colorImg: {
    width: 350,
    height: 250,
  },
})