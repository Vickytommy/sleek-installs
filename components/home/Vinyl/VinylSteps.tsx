import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { SegmentedControl } from '@/components/SegmentedControl';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { defaultStyles } from '@/constants/Styles';

const wallsList = [
    {
        title: 'Vinyl-Over Steel Pool Steps',
        category: 'Inground Pool Steps',
        desc: 'Latham steel pool stairs are covered in vinyl, merging the strength of steel with the comfort of a vinyl liner. We use top-of-the-line materials and cutting-edge manufacturing techniques, such as 14-gauge steel coated with zinc galvanization, to provide outstanding performance. Benefits of steel steps include',
        images: [
            require("@/assets/images/vinyl/steps2.jpg"),
            require("@/assets/images/vinyl/steps3.jpg"),
        ]
    },
    {
        title: 'Vinyl Over Polymer Steps',
        category: 'Inground Pool Steps',
        desc: 'Vinyl over polymer steps are typically built into the inside perimeter of the pool, as opposed to being attached on the outside only. This provides a higher degree of quality and stability. Advantages of vinyl over polymer stairs include',
        images: [
            require("@/assets/images/vinyl/steps.jpg"),
            require("@/assets/images/vinyl/walls5.jpg"),
        ]
    },
    {
        title: 'Thermoplastic Steps',
        category: 'Inground Pool Steps',
        desc: 'Thermoplastic steps are some of the toughest and most resilient pool products available to today’s homeowners. Thermoplastic pool steps are',
        images: [
            require("@/assets/images/vinyl/steps5.jpg"),
            require("@/assets/images/vinyl/walls4.jpg")
        ]
    },
    {
        title: 'Acrylic Fiberglass Pool Steps',
        category: 'Inground Pool Steps',
        desc: 'Latham fiberglass pool steps use premium materials that undergo rigorous testing for strength and resilience. Benefits of fiberglass pool stairs include:',
        images: [
            require("@/assets/images/vinyl/steps10.jpg"),
            require("@/assets/images/vinyl/steps11.jpg"),
        ]
    }
]

const VinylSteps = () => {
  return (
    <View style={{ backgroundColor: '#efefef', paddingTop: 20, paddingBottom: 20, borderWidth: StyleSheet.hairlineWidth, borderColor: '#aaa' }}>
      {
        wallsList.map((wall, index) => (
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
                    <View style={styles.scrollContainer} key={index}>
                        <Image style={styles.scrollImg} resizeMode='cover' source={img} />
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

      <TouchableOpacity style={[defaultStyles.btn, { marginHorizontal: 16 }]}>
        <Text style={defaultStyles.btnText}>Speak To a Builder</Text>
      </TouchableOpacity>
       
    </View>
  );
}

export default VinylSteps;


const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	},
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  featuresIcon: {

  },
  featuresDetails: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 25,
  },
  featuresHeader: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'ral-b',
    paddingBottom: 5
  },
  featuresText: {
    color: Colors.light.gray,
    fontSize: 14,
    fontFamily: 'ral'
  },  
  separatorLine: {
    flex: 1,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 16
  },
  scrollContainer: {
    width: 375,
    // height: 150,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 2
  },
  scrollImg: {
    width: 375,
    height: 255,
  },
})