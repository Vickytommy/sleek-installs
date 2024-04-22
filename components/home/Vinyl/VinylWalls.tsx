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
        title: 'Steel Pool Walls',
        category: 'Inground Pool Walls',
        desc: 'Today’s homeowners have a choice between two basic types of vinyl pool walls: polymer walls or steel walls. Steel pool walls offer strength and durability and utilize galvanized steel which helps resist corrosion and prolong the life of the pool. Steel pool walls are 100% customizable so we can design any shape and size to complement your pool.',
        images: [
            require("@/assets/images/vinyl/walls.jpg"),
            require("@/assets/images/vinyl/walls2.jpg"),
            require("@/assets/images/vinyl/walls3.jpg")
        ]
    },
    {
        title: 'Polymer Pool Walls',
        category: 'Inground Pool Walls',
        desc: 'Polymer pool walls manufactured by Latham are 100% corrosion-free, offering unmatched durability and resilience. When installed properly, polymer walls stand up to the test of time, weathering decades of even the brightest sunshine and rowdiest splashing. Not only is polymer tough and rugged; its anti-corrosive properties also make it ideal for saltwater pools, which are increasingly popular due to their easy maintenance.',
        images: [
            require("@/assets/images/vinyl/walls4.jpg"),
            require("@/assets/images/vinyl/walls5.jpg"),
            require("@/assets/images/vinyl/walls6.jpg")
        ]
    }
]

const VinylWalls = () => {
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
            <View style={{ paddingHorizontal: 16, marginBottom: 50 }}>
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

export default VinylWalls;


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