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
        title: 'What Is Pool Coping?',
        category: 'Overview',
        desc: 'Pool coping is the frame around the edge or lip of your pool. Pool coping serves multiple purposes for your vinyl liner pool. First, it is the decorative frame around the edge of your pool which then transitions to your decking. The second purpose of swimming pool coping is to give the swimmers an edge to hold onto while also helping to move any splashed water away from the edge of the pool. The third purpose of pool coping in a vinyl liner pool is to help cover the aluminum coping track underneath, which serves as the connection point for the actual vinyl liner to hang. Though coping and decking are often paired, the coping can be both functionally and visually distinct from the rest of the deck.',
        images: [
            require("@/assets/images/vinyl/coping2.jpg"),
            require("@/assets/images/vinyl/coping10.jpg")
        ]
    },
    {
        title: 'Flat Top Mount',
        category: 'TYPES OF POOL COPING',
        desc: 'Vinyl over polymer steps are typically built into the inside perimeter of the pool, as opposed to being attached on the outside only. This provides a higher degree of quality and stability. Advantages of vinyl over polymer stairs include',
        images: [
            require("@/assets/images/vinyl/coping3.jpg"),
            require("@/assets/images/vinyl/coping4.jpg")
        ]
    },
    {
        title: 'What Is Pool Decking?',
        category: 'Overview',
        desc: 'A swimming pool deck is so much more than a few planks of wood or composite. Pool surround decking provides a frame and pathway around the swimming pool but also doubles as a work of architectural beauty, creating the perfect backdrop for your next cookout, barbecue or dinner party.',
        images: [
            require("@/assets/images/vinyl/coping5.jpg"),
            require("@/assets/images/vinyl/walls5.jpg")
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

const VinylCoping = () => {
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
                    <View style={[styles.scrollContainer]} key={index}>
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

export default VinylCoping;


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